import { ReactNode } from 'react';

export interface IHeader {
  level?: number;
  children?: ReactNode;
  color?: string;
  subColor?: string;
  dataTestId?: string;
  fontSize?: number;
  subFontWeight?: string;
}
