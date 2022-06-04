import { useSearchContext } from '../../hooks/useSearchContext';
import { StyledSearchTemplate } from './styles';
import { ISearchTemplate } from './types';

export const SearchTemplate = ({
  dataTestId,
}: ISearchTemplate) => {
  const {} = useSearchContext();
  return (
    <StyledSearchTemplate data-testid={dataTestId}>
        Hello World
    </StyledSearchTemplate>
  );
};
