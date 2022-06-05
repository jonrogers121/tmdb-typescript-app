import { useMemo } from 'react';
import { getSearchResults } from '../helpers/requests';
import useFetch from './useFetch';

const useSearchQuery = (term: string) => {
  const request: any = useMemo(() => getSearchResults(term), [term]);
  return useFetch(request);
};

export default useSearchQuery;
