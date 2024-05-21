import { HttpAdapter } from "../../../config/adapters/http/Http.adapter";
import { OneMovieDB } from "../../../infrastructure/interfaces/movie-db.responses";
import { movieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async ( fetcher: HttpAdapter, movieId: number ): Promise<FullMovie> => {

    try {
        const res = await fetcher.get<OneMovieDB>(`/${movieId}`)
        return movieMapper.fromOneMovieDBToEntity(res)

    } catch (error) {
        console.log({error})
        throw new Error(`Error getting movie by id (use-case): ${error}`)
    }

}