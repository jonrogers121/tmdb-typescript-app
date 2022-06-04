import { Link } from 'react-router-dom';
import TextInput from '../../atoms/TextInput';
import logo from '../../assets/fxdigitallogo.png';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <TextInput />
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
