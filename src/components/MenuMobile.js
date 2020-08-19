import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import hamburgerIcon from "../images/hamburger-white.svg";

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <Menu
      right
      id="slide"
      width={'100vw'}
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
      customBurgerIcon={<img src={hamburgerIcon} alt="menu" />}
      styles={{
        bmBurgerBars: {
          height: '3px',
        },
      }}
    >
      {menuLinks.map((link) => (
        <li key={link.name}>
          {link.external ? (
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ) : (
            <Link to={link.link}>{link.name}</Link>
          )}
        </li>
      ))}
    </Menu>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              external
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile data={data} />}
  />
);
