import { useHomeContext } from '../../hooks/useHomeContext';
import ResultsGrid from '../../organisms/ResultsGrid';
import { StyledHomeTemplate } from './styles';
import { IHomeTemplate } from './types';

export const HomeTemplate = ({ dataTestId }: IHomeTemplate) => {
  const { movieData } = useHomeContext();
  return (
    <StyledHomeTemplate data-testid={dataTestId}>
      <ResultsGrid items={movieData} />
    </StyledHomeTemplate>
  );
};
