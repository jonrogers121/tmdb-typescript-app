import Container from '../../atoms/Container';
import Copy from '../../atoms/Copy';
import Grid from '../../atoms/Grid';
import Header from '../../atoms/Header';
import { px2Rem } from '../../helpers/px2Rem';
import { useMovieContext } from '../../hooks/useMovieContext';
import { primaryColors } from '../../variables/colors';
import { IMovieDetailsCard } from './types';

export const MovieDetailsCard = ({ dataTestId }: IMovieDetailsCard) => {
  const { movieDetails } = useMovieContext();
  console.log(movieDetails);
  return (
    <Container
      data-testid={dataTestId}
      boxShadow
      backgroundImage={movieDetails?.posterBackdrop}
      backgroundImageSize="cover"
      backgroundImagePosition="50%"
      center
      styles={{
        borderRadius: px2Rem(10)
      }}
      height="70vh">
      <Container backgroundColor={primaryColors.c01} boxShadow>
        <Grid columns={2} columnsMobile={1}>
          <Container height={px2Rem(230)} backgroundImage={movieDetails?.poster} />

          <Container>
            <Header level={3} color={primaryColors.w01}>
              {movieDetails?.title}
            </Header>
            <Copy color={primaryColors.w01}>{movieDetails?.overview}</Copy>
          </Container>
        </Grid>
      </Container>
    </Container>
  );
};
