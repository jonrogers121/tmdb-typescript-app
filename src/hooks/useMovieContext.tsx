import { useEffect, useState } from 'react';
import constate from 'constate';
import { getMovieIdFromPathname } from '../utils/getMovieIdFromPathname';
import useMovieDetails from './useMovieDetails';
import { IMovies } from '../types/movies';

interface IMovieContext {
  movieId: string;
}

const useMovie = ({ movieId }: IMovieContext) => {
  const { data, error, loading } = useMovieDetails(movieId);
  const [movieDetails, setMovieDetails] = useState<any>();

  useEffect(() => {
    if (data) {
      const { title, overview, poster_path, vote_average } = data;
      setMovieDetails({
        title,
        overview,
        poster: poster_path,
        rating: vote_average
      });
    }
  }, [data]);

  return {
    movieDetails,
    loading,
    error
  };
};

const [MovieProvider, useMovieContext] = constate(useMovie);
export { MovieProvider, useMovieContext };
