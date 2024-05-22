import {Cast} from '../../entities/cast.entity';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import {HttpAdapter} from '../../../config/adapters/http/Http.adapter';
import {MovieDBCreditsResponse} from '../../../infrastructure/interfaces/movie-db.responses';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
    return actors;
  } catch (error) {
    throw new Error(`Error getting movie cast: ${error}`);
  }
};
