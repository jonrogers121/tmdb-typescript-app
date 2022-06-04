import styled from 'styled-components';
import { px2Rem } from '../../helpers/px2Rem';
import { IHeader } from './types';

const StyledHeaderContent = styled.span<IHeader>`
  font-weight: bold;
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${px2Rem(fontSize)};`}
  & span {
    ${({ subColor }) => subColor && `color: ${subColor};`}
    ${({ subFontWeight }) => subFontWeight && `font-weight: ${subFontWeight};`}
  }
`;

export { StyledHeaderContent };
