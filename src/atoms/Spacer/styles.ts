import styled from 'styled-components';
import { px2Rem } from '../../helpers/px2Rem';
import { breakpoints } from '../../variables/breakpoints';
import { ISpacer } from './types';

const StyledSpacer = styled.div<ISpacer>`
  margin-bottom: ${({ height, mobile }) => height && !mobile && px2Rem(height)};
  @media (max-width: ${breakpoints.mobile}px) {
    margin-bottom: ${({ height, mobile }) => height && mobile && px2Rem(height)};
  }
`;

export { StyledSpacer };
