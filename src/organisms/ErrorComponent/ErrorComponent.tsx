import Container from '../../atoms/Container';
import Copy from '../../atoms/Copy';
import { uiStateColors } from '../../variables/colors';
import warning from '../../assets/warning.png';
import { IErrorComponent } from './types';

export const ErrorComponent = ({ dataTestId }: IErrorComponent) => {
  return (
    <Container data-testid={dataTestId} center width="100%" height="70vh">
      <Container>
        <img src={warning} alt="warning triangle" height={200} />
      </Container>
      <Container>
        <Copy color={uiStateColors.error} fontSize={22}>
          Sorry, there was a problem with your request. Please check your internet connection and
          try again.
        </Copy>
      </Container>
    </Container>
  );
};
