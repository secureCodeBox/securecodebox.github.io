import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const Integrations = props => {
  const scanner = props.data.scanner.edges;
  const persistenceProvider = props.data.persistenceProvider.edges;

  return (
    <Layout bodyClass="page-integrations">
      <SEO title="Scanner" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Integrations</h1>
              <h2>Out of the Box</h2>
              <p>
                Each Scanner is an individual tool. We took no part in building
                them and did not adjust them for our purposes, which is great,
                because, like so we can provide them as they are and ready for
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  pb-2  pb-md-3">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">Scanner</h2>
          </div>
          {scanner.map(edge => (
            <div
              key={edge.node.id}
              className="col-12 col-md-6 col-lg-6 col-sm-12 mb-2 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                <div className="feature hoverable">
                  <div className="feature-scanner-icon">
                    <img
                      className="scanner-icon"
                      src={withPrefix(
                        '/integrationIcons/' +
                          edge.node.frontmatter.title +
                          '.svg'
                      )}
                      alt="scanner icon"
                    ></img>
                    <img
                      className="release"
                      src={edge.node.frontmatter.release}
                      alt="release version"
                    ></img>
                  </div>
                  <h2 className="feature-title">
                    {edge.node.frontmatter.title}
                  </h2>
                  <div className="feature-content">
                    <p>{edge.node.frontmatter.usecase}</p>
                  </div>
                  <div className="feature-scanner-icon-right-gap"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container  pb-2  pb-md-3">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">Persistence Provider</h2>
          </div>
          {persistenceProvider.map(edge => (
            <div
              key={edge.node.id}
              className="col-12 col-md-6 col-lg-6 col-sm-12 mb-2 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                <div className="feature hoverable">
                  <div className="feature-scanner-icon">
                    <img
                      className="scanner-icon"
                      src={withPrefix(
                        '/integrationIcons/' +
                          edge.node.frontmatter.title +
                          '.svg'
                      )}
                      alt="persistence provider icon"
                    ></img>
                  </div>
                  <h2 className="feature-title">
                    {edge.node.frontmatter.title}
                  </h2>
                  <div className="feature-content">
                    <p>{edge.node.frontmatter.usecase}</p>
                  </div>
                  <div className="feature-scanner-icon-right-gap"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    scanner: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "scanner" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            category
            usecase
            release
          }
        }
      }
    }
    persistenceProvider: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/integrations/persistence-provider/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            category
          }
          id
          html
        }
      }
    }
  }
`;

export default Integrations;
