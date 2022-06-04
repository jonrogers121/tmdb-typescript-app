import { useMemo } from 'react';
import { getMovieDetails } from '../helpers/requests';
import useFetch from './useFetch';

const useMovieDetails = (id: string) => {
  const request: any = useMemo(() => getMovieDetails(id), []);
  return useFetch(request);
};

export default useMovieDetails;
