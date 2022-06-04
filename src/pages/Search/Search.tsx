import SearchTemplate from '../../templates/SearchTemplate';
import { SearchProvider } from '../../hooks/useSearchContext';
import { useEffect, useState } from 'react';
import { getQueryFromPathname } from '../../utils/getQueryFromPathname';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  useEffect(() => {
    setSearchTerm(getQueryFromPathname(window?.location?.pathname));
  }, []);

  if (!searchTerm) return null;

  return (
    <SearchProvider searchTerm={searchTerm}>
      <SearchTemplate />
    </SearchProvider>
  );
};
