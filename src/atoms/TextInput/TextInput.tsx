import { StyledTextInput } from './styles';
import { ITextInput } from './types';

export const TextInput = ({ dataTestId }: ITextInput) => {
  return <StyledTextInput data-testid={dataTestId} />;
};
