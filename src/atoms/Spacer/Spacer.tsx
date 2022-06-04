import { StyledSpacer } from './styles';
import { ISpacer } from './types';

export const Spacer = ({ dataTestId, height, mobile }: ISpacer) => {
  return <StyledSpacer data-testid={dataTestId} height={height} mobile={mobile} />;
};
