import { StyledGrid } from './styles';
import { IGrid } from './types';

export const Grid = ({
  dataTestId,
  children,
  columns,
  columnsMobile,
  columnsTablet,
  rows,
  rowGap,
  columnGap,
  templateColumns
}: IGrid) => {
  return (
    <StyledGrid
      data-testid={dataTestId}
      columns={columns}
      columnsMobile={columnsMobile}
      columnsTablet={columnsTablet}
      rows={rows}
      rowGap={rowGap}
      columnGap={columnGap}
      templateColumns={templateColumns}>
      {children}
    </StyledGrid>
  );
};
