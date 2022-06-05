import { StyledErrorComponent } from './styles';
import { IErrorComponent } from './types';

export const ErrorComponent = ({ dataTestId }: IErrorComponent) => {
  return <StyledErrorComponent data-testid={dataTestId}>Error message</StyledErrorComponent>;
};
