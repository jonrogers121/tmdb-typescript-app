import MovieTemplate from '../../templates/MovieTemplate';
import { MovieProvider } from '../../hooks/useMovieContext';

export const Movie = () => {
  return (
    <MovieProvider>
      <MovieTemplate />
    </MovieProvider>
  );
};
