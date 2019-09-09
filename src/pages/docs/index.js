import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const Docs = (props) => {
  const docs = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-docs">
      <SEO title="Documentation" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Documentation</h1>
              <h2>For developers and users</h2>
              <p>Documentation for developing purposes and advanced usage.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container  pb-2  pb-md-3">
        <div className="row justify-content-center">
          {docs.map(doc => (
            <div className="feature">
              <h1>{doc.node.frontmatter.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/docs/" } }
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Docs;
