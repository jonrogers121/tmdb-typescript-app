import MovieTemplate from '../../templates/MovieTemplate';
import { MovieProvider } from '../../hooks/useMovieContext';
import { useEffect, useState } from 'react';
import { getMovieIdFromPathname } from '../../utils/getMovieIdFromPathname';

export const Movie = () => {
  const [movieId, setMovieId] = useState<string>();
  useEffect(() => {
    setMovieId(getMovieIdFromPathname(window?.location?.pathname));
  }, []);
  if (!movieId) return null;
  return (
    <MovieProvider movieId={movieId || ''}>
      <MovieTemplate />
    </MovieProvider>
  );
};
