import SearchTemplate from '../../templates/SearchTemplate';
import { SearchProvider } from '../../hooks/useSearchContext';

export const Search = () => {
  return (
    <SearchProvider>
      <SearchTemplate />
    </SearchProvider>
  );
};
