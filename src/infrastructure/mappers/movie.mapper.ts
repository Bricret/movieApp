import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {OneMovieDB, Result} from '../interfaces/movie-db.responses';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export class movieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      realaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `${BASE_IMAGE_URL}${result.poster_path}`,
      backdrop: `${BASE_IMAGE_URL}${result.backdrop_path}`,
    };
  }

  static fromOneMovieDBToEntity( movie: OneMovieDB ): FullMovie {
    return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        realaseDate: new Date(movie.release_date),
        rating: movie.vote_average,
        poster: `${BASE_IMAGE_URL}${movie.poster_path}`,
        backdrop: `${BASE_IMAGE_URL}${movie.backdrop_path}`,
        genres: movie.genres.map( genre => genre.name ),
        duration: movie.runtime,
        budget: movie.budget,
        originalTitle: movie.original_title,
        productionCompanies: movie.production_companies.map( company => company.name ),
        vote_average: movie.vote_average,
        adult: movie.adult,
    }

  }
}