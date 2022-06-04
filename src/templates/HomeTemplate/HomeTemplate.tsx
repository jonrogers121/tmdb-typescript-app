import { useHomeContext } from '../../hooks/useHomeContext';
import { StyledHomeTemplate } from './styles';
import { IHomeTemplate } from './types';

export const HomeTemplate = ({ dataTestId }: IHomeTemplate) => {
  const {} = useHomeContext();
  return <StyledHomeTemplate data-testid={dataTestId}>Home template</StyledHomeTemplate>;
};
