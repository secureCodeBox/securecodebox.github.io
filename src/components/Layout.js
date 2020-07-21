import React from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import BetaAlert from './BetaAlert';
import '../scss/style.scss';
import MenuMobile from "../components/MenuMobile";

const Layout = props => {
  return (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
        <div id="wrapper" className="wrapper">
          <BetaAlert />
          <Header />
          <MenuMobile />
          {props.children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout
