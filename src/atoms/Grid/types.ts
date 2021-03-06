import { ReactNode } from 'react';

export interface IStyledGrid {
  columns?: number;
  columnsMobile?: number;
  columnsTablet?: number;
  rows?: number;
  rowGap?: number;
  columnGap?: number;
  templateColumns?: string;
}
export interface IGrid extends IStyledGrid {
  dataTestId?: string;
  children: ReactNode;
}
