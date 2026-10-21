import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-top">
        <Link  to="/"><img className="favicon" src='/favicon.svg' width="30px" height="30px"/></Link>
      </div>
      <div className="navbar-bottom">
        <Link to="/about-me">About Me</Link>
      </div>
    </div>
  );
};

export default Navbar;