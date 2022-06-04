import { StyledTextInput } from './styles';
import { ITextInput } from './types';

export const TextInput = ({ dataTestId, onChange }: ITextInput) => {
  return <StyledTextInput data-testid={dataTestId} onChange={onChange} />;
};
