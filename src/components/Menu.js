import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import socialChannels from '../data/social.json';

const Menu = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link) => (
          <li key={link.name}>
            {link.external ? (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ) : (
              <Link activeClassName="active-Link" to={link.link}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
        {socialChannels.map((socialChannel) => (
          <li key={socialChannel.title}>
            <a
              href={socialChannel.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialChannel.image} alt={socialChannel.altText} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              external
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
