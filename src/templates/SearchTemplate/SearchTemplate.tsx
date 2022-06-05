import { useSearchContext } from '../../hooks/useSearchContext';
import Layout from '../../organisms/Layout';
import ResultsGrid from '../../organisms/ResultsGrid';
import { StyledSearchTemplate } from './styles';
import { ISearchTemplate } from './types';

export const SearchTemplate = ({ dataTestId }: ISearchTemplate) => {
  const { movieData, searchTerm } = useSearchContext();
  return (
    <StyledSearchTemplate data-testid={dataTestId}>
      <Layout pageHeader={`Search results for ${searchTerm}`}>
        <ResultsGrid items={movieData} />
      </Layout>
    </StyledSearchTemplate>
  );
};
