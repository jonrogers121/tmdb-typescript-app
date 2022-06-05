import { Link } from 'react-router-dom';
import TextInput from '../../atoms/TextInput';
import logo from '../../assets/tmdlogo.png';
import Button from '../../atoms/Button';
import SearchForm from '../../molecules/SearchForm';
import Container from '../../atoms/Container';
import Grid from '../../atoms/Grid';

export const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <Grid columns={2} templateColumns="30% 70%" columnsMobile={1}>
            <Link to="/">
              <img src={logo} alt="logo" height={40} />
            </Link>
            <SearchForm />
          </Grid>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
