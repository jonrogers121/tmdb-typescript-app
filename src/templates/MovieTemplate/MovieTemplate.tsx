import { useMovieContext } from '../../hooks/useMovieContext';
import ErrorComponent from '../../organisms/ErrorComponent';
import Layout from '../../organisms/Layout';
import LoadingComponent from '../../organisms/LoadingComponent';
import MovieDetailsCard from '../../organisms/MovieDetailsCard';
import { StyledMovieTemplate } from './styles';
import { IMovieTemplate } from './types';

export const MovieTemplate = ({ dataTestId }: IMovieTemplate) => {
  const { error, loading } = useMovieContext();

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;

  return (
    <StyledMovieTemplate data-testid={dataTestId}>
      <Layout pageHeader="Movie details">
        <MovieDetailsCard />
      </Layout>
    </StyledMovieTemplate>
  );
};
