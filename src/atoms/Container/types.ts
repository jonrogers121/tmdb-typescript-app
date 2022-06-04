import { ReactNode } from 'react';

export interface IContainer {
  children?: ReactNode;
  dataTestId?: string;
  ref?: any;
  width?: string;
  maxWidth?: string;
  height?: string;
  center?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundImagePosition?: string;
  backgroundImageSize?: string;
  flexRow?: boolean;
  padding?: string;
  spaceBetween?: boolean;
  alignRight?: boolean;
  alignBottom?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  margin?: string;
  boxShadow?: boolean;
  border?: string;
  styles?: {};
  noPadding?: boolean;
  onClick?: () => void;
  cursorPointer?: boolean;
  columnReverse?: boolean;
}
