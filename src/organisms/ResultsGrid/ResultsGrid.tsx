import Grid from '../../atoms/Grid';
import { StyledResultsGrid } from './styles';
import { IResultsGrid } from './types';

export const ResultsGrid = ({ dataTestId, items }: IResultsGrid) => {
  return (
    <StyledResultsGrid data-testid={dataTestId}>
      <Grid columns={3} columnsTablet={2} columnsMobile={1}>
        {items?.map(({ original_title }) => (
          <div>{original_title}</div>
        ))}
      </Grid>
    </StyledResultsGrid>
  );
};
