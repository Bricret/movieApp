import { useEffect, useState } from "react"

import { Cast } from "../../core/entities/cast.entity";
import { FullMovie } from "../../core/entities/movie.entity";
import { getMovieByIdUseCase, getMovieCastUseCase } from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";


export const useMovie = ( movideId: number ) => {

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>()
    const [cast, setCast] = useState<Cast[]>()


    useEffect(() => {
        loadMovie()
    }, [])

    const loadMovie = async () => {
        try {

            const getOneMoviePromise = getMovieByIdUseCase(  movieDBFetcher, movideId )
            const getCastMoviePromise = getMovieCastUseCase(  movieDBFetcher, movideId )
            const [ getOneMovie, cast ] = await Promise.all([getOneMoviePromise, getCastMoviePromise])

            setMovie(getOneMovie)
            setCast(cast)
            setisLoading(false)
        } catch (error) {
            throw new Error(`Error getting movie or cast by id (Hook): ${error}`)
        }
    }

  return {
    isLoading,
    movie,
    cast,
  }
}
