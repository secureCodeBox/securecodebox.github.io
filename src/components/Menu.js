import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { node } from 'prop-types';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  const json = props.data.allFeaturesJson.edges;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            {/* <Link to={link.link}>{link.name}</Link> */}
           <a href={link.link} target="_blank">{link.name}</a>
          </li>
        ))}
        {json.map(edge =>(
          <li key={edge.node.title}>
            <a href={edge.node.link} target="_blank"><img src={edge.node.image} /></a>
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
        allFeaturesJson (filter: {tag: {eq: "social"}}){
          edges {
            node {
              id
              title
              link
              image
              tag
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
