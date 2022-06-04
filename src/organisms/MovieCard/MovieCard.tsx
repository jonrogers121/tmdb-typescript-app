import Container from '../../atoms/Container';
import Copy from '../../atoms/Copy';
import Header from '../../atoms/Header';
import Spacer from '../../atoms/Spacer';
import { px2Rem } from '../../helpers/px2Rem';
import { primaryColors } from '../../variables/colors';
import { IMovieCard } from './types';

export const MovieCard = ({ dataTestId, posterUrl, title, rating }: IMovieCard) => {
  return (
    <Container
      dataTestId={dataTestId}
      boxShadow
      center
      padding={px2Rem(16)}
      height={px2Rem(400)}
      cursorPointer
    >
      <Spacer height={16} />
      <Container
        height={px2Rem(200)}
        width="fill-available"
        backgroundImage={`http://image.tmdb.org/t/p/w185/${posterUrl}`}
        backgroundImagePosition="50%"
        backgroundImageSize="contain"
      />
      <Spacer height={16} />
      <Copy>Viewer rating: {rating}</Copy>
      <Spacer height={16} />
      <Header level={4} color={primaryColors.c01}>
        {title}
      </Header>
      <Spacer height={16} />
    </Container>
  );
};
