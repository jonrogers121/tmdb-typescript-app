import { ReactNode } from 'react';

export interface ICopy {
  dataTestId?: string;
  children: ReactNode;
  color?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  lineHeight?: number;
}
