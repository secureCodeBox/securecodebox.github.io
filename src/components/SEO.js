import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/Favicon@1x.svg';

// TODO: Fix favicon
const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          link={[
            { rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` },
          ]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
