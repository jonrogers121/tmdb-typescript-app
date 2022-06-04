import styled from 'styled-components';
import { px2Rem } from '../../helpers/px2Rem';
import { IContainer } from './types';

const StyledContainer = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  ${({ flexRow }) => flexRow && `flex-direction: row;`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ center }) => center && `justify-content: center; align-items: center;`}
  ${({ centerVertical }) => centerVertical && `align-items: center;`}
  ${({ centerHorizontal }) => centerHorizontal && `justify-content: center;`}
  ${({ alignRight }) => alignRight && `align-items: flex-end;`}
  ${({ alignBottom }) => alignBottom && `justify-content: flex-end;`}
  ${({ alignCenter }) => alignCenter && `align-items: center;`}
  ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}
  ${({ spaceBetween }) => spaceBetween && `justify-content: space-between;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: 100% 100%;
  `}
   ${({ backgroundImagePosition }) =>
    backgroundImagePosition &&
    `
    background-position: ${backgroundImagePosition};
  `}
   ${({ backgroundImageSize }) =>
    backgroundImageSize &&
    `
    background-size: ${backgroundImageSize};
  `}
  ${({ boxShadow }) =>
    boxShadow &&
    `box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);`}
  ${({ border }) => border && `border: solid ${px2Rem(1)} ${border};`}
  ${({ noPadding }) => noPadding && `padding: 0;`}
  ${({ cursorPointer }) => cursorPointer && `cursor: pointer;`}
  ${({ columnReverse }) => columnReverse && `flex-direction: column-reverse;`}
`;

export { StyledContainer };
