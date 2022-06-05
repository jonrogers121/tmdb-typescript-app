import { StyledButton } from './styles';
import { IButton } from './types';

export const Button = ({ dataTestId, children, onClick }: IButton) => {
  return (
    <StyledButton data-testid={dataTestId} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
