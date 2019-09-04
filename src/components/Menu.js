import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import socialChannels from '../data/social.json';

const Menu = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            {/* <Link to={link.link}>{link.name}</Link> */}
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
        {socialChannels.map(socialChannel => (
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
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
