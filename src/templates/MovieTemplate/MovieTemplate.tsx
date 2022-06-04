import { useMovieContext } from '../../hooks/useMovieContext';
import Layout from '../../organisms/Layout';
import MovieDetailsCard from '../../organisms/MovieDetailsCard';
import { StyledMovieTemplate } from './styles';
import { IMovieTemplate } from './types';

export const MovieTemplate = ({ dataTestId }: IMovieTemplate) => {
  return (
    <StyledMovieTemplate data-testid={dataTestId}>
      <Layout pageHeader="Movie details">
        <MovieDetailsCard />
      </Layout>
    </StyledMovieTemplate>
  );
};
