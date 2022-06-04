import { px2Rem } from './../../helpers/px2Rem';
import styled from 'styled-components';

const StyledTextInput = styled.input`
  width: fit-content;
  height: ${px2Rem(40)};
  font-size: ${px2Rem(18)};
  padding: 0 ${px2Rem(16)};
`;

export { StyledTextInput };
