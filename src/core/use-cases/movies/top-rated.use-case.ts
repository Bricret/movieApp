import { HttpAdapter } from "../../../config/adapters/http/Http.adapter";
import { NowPlayingResponse, Options } from "../../../infrastructure/interfaces/movie-db.responses";
import { movieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {

    try {
        const { results } = await fetcher.get<NowPlayingResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1
            }
        });
        return results.map( movieMapper.fromMovieDBResultToEntity )

    } catch (error) {
        console.log({ error })
        throw new Error('error fetching movies - top rated')
    }

}
