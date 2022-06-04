import Grid from '../../atoms/Grid';
import MovieCard from '../MovieCard';
import { StyledResultsGrid } from './styles';
import { IResultsGrid } from './types';

export const ResultsGrid = ({ dataTestId, items }: IResultsGrid) => {
  return (
    <StyledResultsGrid data-testid={dataTestId}>
      <Grid columns={3} columnsTablet={2} columnsMobile={1} columnGap={16}>
        {items?.map(({ original_title, id, poster_path, vote_average }) => (
          <div key={id}>
            <MovieCard title={original_title} posterUrl={poster_path} rating={vote_average} />
          </div>
        ))}
      </Grid>
    </StyledResultsGrid>
  );
};
