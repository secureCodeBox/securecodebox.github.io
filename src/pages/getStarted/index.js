import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const GetStarted = (props) => {
  const tutorials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-getStarted">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Tutorials</h1>
              <h2>For starting up things</h2>
              <p>
                Guides on how to start up engine, scanner, persistence provider
                and do scan jobs etc.. Perhaps with screencasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container  pb-2  pb-md-3">
        <div className="row justify-content-center">
          {tutorials.map(tutorial => (
            <div className="feature">
              <h1>{tutorial.node.frontmatter.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/getStarted/" } }
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default GetStarted;
