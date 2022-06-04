import { px2Rem } from './../../helpers/px2Rem';
import { primaryColors } from './../../variables/colors';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: ${px2Rem(44)};
  border: none;
  background-color: ${primaryColors.c01};
  color: ${primaryColors.w01};
  padding: 0 ${px2Rem(16)};
  cursor: pointer;
`;

export { StyledButton };
