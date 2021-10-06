import React from 'react';
import { Link } from 'react-router-dom';

// style
import './Navbar.scss';

interface Props {
  icon?: string;
  title?: string;
}

const Navbar: React.FC<Props> = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i className={icon}></i> {title}
      </h1>

      <ul>
        <li>
          <Link to="/" className="navlink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navlink">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

export default Navbar;
