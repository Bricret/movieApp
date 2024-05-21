import { Movie } from "../../core/entities/movie.entity"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { moviesNowPlayingUseCase, moviesTopRatedUseCase, moviesUpComingUseCases, moviesPopularUseCase } from "../../core/use-cases"
import { useEffect, useState } from "react"

let popularPageNumber = 1

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]) 
    const [ upComing, setUpComing ] = useState<Movie[]>([])
    const [ topRated, setTopRated ] = useState<Movie[]>([])
    const [ popular, setPopular ] = useState<Movie[]>([])

    useEffect( () => {
        
        initialLoad()

    }, [])


    const initialLoad = async () => {

            const nowPlayinPromise = moviesNowPlayingUseCase( movieDBFetcher )
            const upComingPromise = moviesUpComingUseCases( movieDBFetcher )
            const topRatedPromise = moviesTopRatedUseCase( movieDBFetcher )
            const popularPromise = moviesPopularUseCase( movieDBFetcher )

        const [
            nowPlayingMovies, 
            upComingMovies, 
            topRatedMovies, 
            popularMovies
        ] = await Promise.all([
            nowPlayinPromise, 
            upComingPromise, 
            topRatedPromise, 
            popularPromise
        ]);

        setNowPlaying(nowPlayingMovies)
        setUpComing(upComingMovies)
        setTopRated(topRatedMovies)
        setPopular(popularMovies)

        setIsLoading(false)
    }


  return {
    nowPlaying,
    upComing,
    topRated,
    popular,
    isLoading,

    // Methods
    popularNextPage: async () => {
        popularPageNumber++
        const popularMovies = await moviesPopularUseCase( movieDBFetcher, {
            page: popularPageNumber
        })
        setPopular( prev => [ ...prev, ...popularMovies ] )
    }
  }
}
