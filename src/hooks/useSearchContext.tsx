import { useEffect, useState } from 'react';
import constate from 'constate';
import useSearchQuery from './useSearchQuery';
import { IMovies } from '../types/movies';

interface ISearchContext {
  searchTerm: string;
}

const useSearch = ({ searchTerm }: ISearchContext) => {
  const [movieData, setMovieData] = useState<IMovies[]>();
  const { data, error, loading } = useSearchQuery(searchTerm);

  useEffect(() => {
    if (data) {
      const { results } = data;
      setMovieData(results);
    }
  }, [data]);

  return {
    searchTerm,
    movieData,
    error,
    loading
  };
};

const [SearchProvider, useSearchContext] = constate(useSearch);
export { SearchProvider, useSearchContext };
