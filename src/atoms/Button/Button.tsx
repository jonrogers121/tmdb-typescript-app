import { StyledButton } from './styles';
import { IButton } from './types';

export const Button = ({
  dataTestId,
}: IButton) => {
  return (
    <StyledButton data-testid={dataTestId}>
      Hello World
    </StyledButton>
  );
};
