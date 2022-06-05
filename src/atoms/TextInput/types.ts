import { ChangeEvent } from 'react';

export interface ITextInput {
  dataTestId?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
