import { Link } from 'react-router-dom';
import TextInput from '../../atoms/TextInput';
import logo from '../../assets/fxdigitallogo.png';
import Button from '../../atoms/Button';
import SearchForm from '../../molecules/SearchForm';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <SearchForm />
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
