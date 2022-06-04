import { px2Rem } from '../../helpers/px2Rem';
import styled from 'styled-components';
import { IStyledGrid } from './types';

const StyledGrid = styled.div<IStyledGrid>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr);`}
  ${({ rowGap }) => rowGap && `grid-row-gap: ${px2Rem(rowGap)}};`}
  ${({ columnGap }) => columnGap && `grid-column-gap: ${px2Rem(columnGap)}};`}
  @media (max-width: 996px) {
    ${({ columnsTablet }) =>
      columnsTablet && `grid-template-columns: repeat(${columnsTablet}, 1fr);`}
  }
  @media (max-width: 600px) {
    ${({ columnsMobile }) =>
      columnsMobile && `grid-template-columns: repeat(${columnsMobile}, 1fr);`}
  }
`;

export { StyledGrid };
