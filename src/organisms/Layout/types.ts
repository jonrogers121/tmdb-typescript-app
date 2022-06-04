import { ReactNode } from 'react';
export interface ILayout {
  dataTestId?: string;
  children: ReactNode;
  pageHeader: string;
}
