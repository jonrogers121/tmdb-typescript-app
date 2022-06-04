import Container from '../../atoms/Container';
import { useMovieContext } from '../../hooks/useMovieContext';
import { IMovieDetailsCard } from './types';

export const MovieDetailsCard = ({ dataTestId }: IMovieDetailsCard) => {
  const { movieDetails } = useMovieContext();
  console.log(movieDetails);
  return (
    <Container data-testid={dataTestId} boxShadow>
      <p>{movieDetails?.title}</p>
    </Container>
  );
};
