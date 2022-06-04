import { useMovieContext } from '../../hooks/useMovieContext';
import Layout from '../../organisms/Layout';
import { StyledMovieTemplate } from './styles';
import { IMovieTemplate } from './types';

export const MovieTemplate = ({ dataTestId }: IMovieTemplate) => {
  const {} = useMovieContext();
  return (
    <StyledMovieTemplate data-testid={dataTestId}>
      <Layout pageHeader="Movie details">Hello World</Layout>
    </StyledMovieTemplate>
  );
};
