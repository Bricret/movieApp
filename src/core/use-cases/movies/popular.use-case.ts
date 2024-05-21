import { HttpAdapter } from "../../../config/adapters/http/Http.adapter";
import { Movie } from "../../entities/movie.entity";
import { movieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { PupularResponse } from "../../../infrastructure/interfaces/movie-db.responses";

interface Options {
    page?:  number;
    limit?: number; 
}

export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {

    try {

        const { results } = await fetcher.get<PupularResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });
        return results.map( movieMapper.fromMovieDBResultToEntity )

    } catch (error) {
        console.log({ error })
        throw new Error('error fetching movies - popular')
    }

}