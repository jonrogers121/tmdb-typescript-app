import { useSearchContext } from '../../hooks/useSearchContext';
import ErrorComponent from '../../organisms/ErrorComponent';
import Layout from '../../organisms/Layout';
import LoadingComponent from '../../organisms/LoadingComponent';
import ResultsGrid from '../../organisms/ResultsGrid';
import { StyledSearchTemplate } from './styles';
import { ISearchTemplate } from './types';

export const SearchTemplate = ({ dataTestId }: ISearchTemplate) => {
  const { movieData, searchTerm, error, loading } = useSearchContext();

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;
  return (
    <StyledSearchTemplate data-testid={dataTestId}>
      <Layout pageHeader={`Search results for ${searchTerm}`}>
        <ResultsGrid items={movieData} />
      </Layout>
    </StyledSearchTemplate>
  );
};
