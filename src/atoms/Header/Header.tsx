import { createElement } from 'react';
import { StyledHeaderContent } from './styles';
import { IHeader } from './types';

const BaseHeader = ({ level, children }: IHeader) => {
  return createElement(
    `h${level}`,
    {
      'data-testid': 'header'
    },
    children
  );
};

const Header = ({
  children,
  color,
  subColor,
  fontSize,
  dataTestId,
  level,
  subFontWeight
}: IHeader) => {
  return (
    <BaseHeader level={level || 1}>
      <StyledHeaderContent
        color={color}
        subColor={subColor}
        fontSize={fontSize}
        data-testid={dataTestId}
        subFontWeight={subFontWeight}
      >
        {children}
      </StyledHeaderContent>
    </BaseHeader>
  );
};

export default Header;
