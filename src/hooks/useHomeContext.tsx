import { useEffect, useState } from 'react';
import constate from 'constate';
import usePopularMovies from './usePopularMovies';
import { IMovies } from '../types/movies';

const useHome = () => {
  const [movieData, setMovieData] = useState<IMovies[]>();
  const { data, error, loading } = usePopularMovies();

  useEffect(() => {
    if (data) {
      const { results } = data;
      console.log(results);
      setMovieData(results);
    }
  }, [data]);

  return {
    movieData,
    error,
    loading
  };
};

const [HomeProvider, useHomeContext] = constate(useHome);
export { HomeProvider, useHomeContext };
