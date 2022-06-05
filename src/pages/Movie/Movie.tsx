import MovieTemplate from '../../templates/MovieTemplate';
import { MovieProvider } from '../../hooks/useMovieContext';
import { useEffect, useState } from 'react';
import { getQueryFromPathname } from '../../utils/getQueryFromPathname';

export const Movie = () => {
  const [movieId, setMovieId] = useState<string>();
  useEffect(() => {
    setMovieId(getQueryFromPathname(window?.location?.pathname));
  }, []);
  if (!movieId) return null;
  return (
    <MovieProvider movieId={movieId || ''}>
      <MovieTemplate />
    </MovieProvider>
  );
};
