import { useEffect, useState } from 'react';
import constate from 'constate';
import { getMovieIdFromPathname } from '../utils/getMovieIdFromPathname';

const useMovie = () => {
  const [movieId, setMovieId] = useState<string>();
  useEffect(() => {
    const url = window?.location?.pathname;
    setMovieId(getMovieIdFromPathname(url));
  }, []);

  console.log(movieId);

  return {
    movieId
  };
};

const [MovieProvider, useMovieContext] = constate(useMovie);
export { MovieProvider, useMovieContext };
