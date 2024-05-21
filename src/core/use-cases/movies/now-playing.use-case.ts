import { HttpAdapter } from "../../../config/adapters/http/Http.adapter";
import { Movie } from "../../entities/movie.entity";
import { movieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";


export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {

    try {
        
        const { results } = await fetcher.get<NowPlayingResponse>('/now_playing');
        return results.map( movieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log({ error })
        throw new Error('error fetching movies - now playing')
    }

} 