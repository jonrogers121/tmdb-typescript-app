import { useHomeContext } from '../../hooks/useHomeContext';
import ErrorComponent from '../../organisms/ErrorComponent';
import Layout from '../../organisms/Layout';
import LoadingComponent from '../../organisms/LoadingComponent';
import ResultsGrid from '../../organisms/ResultsGrid';
import { StyledHomeTemplate } from './styles';
import { IHomeTemplate } from './types';

export const HomeTemplate = ({ dataTestId }: IHomeTemplate) => {
  const { movieData, error, loading } = useHomeContext();
  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;
  return (
    <StyledHomeTemplate data-testid={dataTestId}>
      <Layout pageHeader="This week's popular movies">
        <ResultsGrid items={movieData} />
      </Layout>
    </StyledHomeTemplate>
  );
};
