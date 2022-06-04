import { StyledContainer } from './styles';
import { IContainer } from './types';

const Container = ({
  children,
  ref,
  width,
  maxWidth,
  height,
  center,
  centerVertical,
  centerHorizontal,
  backgroundColor,
  backgroundImage,
  backgroundImagePosition,
  backgroundImageSize,
  flexRow,
  padding,
  dataTestId,
  spaceBetween,
  alignRight,
  alignBottom,
  alignCenter,
  justifyCenter,
  margin,
  boxShadow,
  border,
  styles,
  noPadding,
  onClick,
  cursorPointer,
  columnReverse
}: IContainer) => {
  return (
    <StyledContainer
      data-testid={dataTestId}
      ref={ref}
      width={width}
      maxWidth={maxWidth}
      height={height}
      center={center}
      centerVertical={centerVertical}
      centerHorizontal={centerHorizontal}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImagePosition={backgroundImagePosition}
      backgroundImageSize={backgroundImageSize}
      flexRow={flexRow}
      padding={padding}
      spaceBetween={spaceBetween}
      alignRight={alignRight}
      alignBottom={alignBottom}
      alignCenter={alignCenter}
      justifyCenter={justifyCenter}
      margin={margin}
      boxShadow={boxShadow}
      border={border}
      style={styles}
      noPadding={noPadding}
      onClick={onClick}
      cursorPointer={cursorPointer}
      columnReverse={columnReverse}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
