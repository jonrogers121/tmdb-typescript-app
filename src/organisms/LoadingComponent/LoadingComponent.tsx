import Container from '../../atoms/Container';
import Copy from '../../atoms/Copy';
import { uiStateColors } from '../../variables/colors';
import loading from '../../assets/loading.png';
import { ILoadingComponent } from './types';

export const LoadingComponent = ({ dataTestId }: ILoadingComponent) => {
  return (
    <Container data-testid={dataTestId} center width="100%" height="70vh">
      <Container>
        <img src={loading} alt="warning triangle" height={200} width="auto" />
      </Container>
      <Container>
        <Copy color={uiStateColors.success} fontSize={22}>
          Loading
        </Copy>
      </Container>
    </Container>
  );
};
