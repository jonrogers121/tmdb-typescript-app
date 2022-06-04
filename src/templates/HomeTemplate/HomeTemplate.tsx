import { useHomeContext } from '../../hooks/useHomeContext';
import Layout from '../../organisms/Layout';
import ResultsGrid from '../../organisms/ResultsGrid';
import { StyledHomeTemplate } from './styles';
import { IHomeTemplate } from './types';

export const HomeTemplate = ({ dataTestId }: IHomeTemplate) => {
  const { movieData } = useHomeContext();
  return (
    <StyledHomeTemplate data-testid={dataTestId}>
      <Layout pageHeader="This week's popular movies">
        <ResultsGrid items={movieData} />
      </Layout>
    </StyledHomeTemplate>
  );
};
