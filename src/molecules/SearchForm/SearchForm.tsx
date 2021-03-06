import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import Grid from '../../atoms/Grid';
import TextInput from '../../atoms/TextInput';
import { px2Rem } from '../../helpers/px2Rem';
import { StyledSearchForm } from './styles';
import { ISearchForm } from './types';

export const SearchForm = ({ dataTestId }: ISearchForm) => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const navigate = useNavigate();
  const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e?.target?.value);
  };
  const handleSubmit = () => {
    navigate(`search/${searchTerm}`);
    refreshPage();
  };
  const refreshPage = () => {
    navigate(0);
  };
  return (
    <StyledSearchForm data-testid={dataTestId}>
      <Grid columns={2} columnGap={24}>
        <TextInput onChange={handleSetInput} />
        <Button onClick={handleSubmit}>Find Movies</Button>
      </Grid>
    </StyledSearchForm>
  );
};
