import { StyledLoadingComponent } from './styles';
import { ILoadingComponent } from './types';

export const LoadingComponent = ({ dataTestId }: ILoadingComponent) => {
  return (
    <StyledLoadingComponent data-testid={dataTestId}>Loading component</StyledLoadingComponent>
  );
};
