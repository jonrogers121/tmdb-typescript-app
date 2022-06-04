import { StyledCopy } from './styles';
import { ICopy } from './types';

const Copy = ({ children, color, fontSize, dataTestId, bold, italic, lineHeight }: ICopy) => {
  return (
    <StyledCopy
      color={color}
      fontSize={fontSize}
      data-testid={dataTestId}
      bold={bold}
      italic={italic}
      lineHeight={lineHeight}>
      {children}
    </StyledCopy>
  );
};

export default Copy;
