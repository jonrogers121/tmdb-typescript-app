import Header from '../../atoms/Header';
import { primaryColors } from '../../variables/colors';
import { StyledLayout } from './styles';
import { ILayout } from './types';

export const Layout = ({ dataTestId, children, pageHeader }: ILayout) => {
  return (
    <StyledLayout data-testid={dataTestId}>
      <Header level={2} color={primaryColors.c01}>
        {pageHeader}
      </Header>
      {children}
    </StyledLayout>
  );
};
