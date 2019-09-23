import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import logo from '../images/Logo White.svg';
import logoMobile from '../images/Logo White.svg';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="secureCodeBox Homepage" src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="secureCodeBox Homepage" src={logoMobile} />
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Header;
