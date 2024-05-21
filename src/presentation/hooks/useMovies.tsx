import { Movie } from "../../core/entities/movie.entity"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { moviesNowPlayingUseCase, moviesTopRatedUseCase, moviesUpComingUseCases, moviesPopularUseCase } from "../../core/use-cases"
import { useEffect, useState } from "react"

let popularPageNumber = 1
let topRatedPageNumber = 1
let upComingPageNumber = 1

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
    // States
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
    },

    topRatedNextPage: async () => {
        topRatedPageNumber++
        const topRatedMovies = await moviesTopRatedUseCase( movieDBFetcher, {
            page: topRatedPageNumber
        })
        setTopRated( prev => [ ...prev, ...topRatedMovies ] )
    },

    upComingNextPage: async () => {
        upComingPageNumber++
        const upComingMovies = await moviesUpComingUseCases( movieDBFetcher, {
            page: upComingPageNumber
        })
        setUpComing( prev => [ ...prev, ...upComingMovies ] )
    }
  }
}
