import styled from 'styled-components';
import { px2Rem } from '../../helpers/px2Rem';
import { ICopy } from './types';

const StyledCopy = styled.p<ICopy>`
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${px2Rem(fontSize)};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ italic }) => italic && `font-style: italic;`}
  ${({ lineHeight }) => lineHeight && `line-height: ${px2Rem(lineHeight)};`}
`;

export { StyledCopy };
