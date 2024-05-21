import { useEffect, useState } from "react"
import { FullMovie } from "../../core/entities/movie.entity";
import { getMovieByIdUseCase } from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovie = ( movideId: number ) => {

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>()


    useEffect(() => {
        loadMovie()
    }, [])

    const loadMovie = async () => {
        try {
            const getOneMovie = await getMovieByIdUseCase(  movieDBFetcher, movideId )
            if(!getOneMovie) throw new Error('Movie not found')
            setMovie(getOneMovie)
            setisLoading(false)
        } catch (error) {
            throw new Error(`Error getting movie by id (Hook): ${error}`)
        }
    }

  return {
    isLoading,
    movie
  }
}
