import { Link } from 'react-router-dom';
import TextInput from '../../atoms/TextInput';
import logo from '../../assets/fxdigitallogo.png';
import Button from '../../atoms/Button';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <TextInput />
        <Button>Find Movies</Button>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
