import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import IntegrationCard from '../../components/IntegrationCard';

const Integrations = (props) => {
  const scanner = props.data.scanner.edges;
  const hook = props.data.hook.edges;
  const persistenceProvider = props.data.persistenceProvider.edges;

  return (
    <Layout bodyClass="page-integrations">
      <SEO title="Scanner" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Integrations</h1>
              <h2>Out of the Box and ready to use</h2>
              <p>
                Each Scanner is an individual tool. We took no part in building
                them and did not adjust them for our purposes, which is great,
                because, like so we can provide them as they are and ready for
                use.
              </p>
              <p>
                If you miss your favorite security Scanner or tool you can
                easily integrate it by adding a contribution (GitHub Pull
                Request) or contact us if you want help with it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-2 pb-md-3">
        <div className="row left-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">Scanner</h2>
            <p>
              Each Scanner is an individual tool. We took no part in building
              them and did not adjust them for our purposes, which is great,
              because, like so we can provide them as they are and ready for
              use.
            </p>
          </div>
          {scanner.map((edge, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-6 col-sm-12 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                <IntegrationCard frontmatter={edge.node.frontmatter} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container  pb-2  pb-md-3">
        <div className="row left-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark ">Persistence Provider</h2>
            <p>
              Each Scanner is an individual tool. We took no part in building
              them and did not adjust them for our purposes, which is great,
              because, like so we can provide them as they are and ready for
              use.
            </p>
          </div>
          {persistenceProvider.map((edge, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-6 col-sm-12 mb-2 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                <IntegrationCard frontmatter={edge.node.frontmatter} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container pb-2 pb-md-3">
        <div className="row left-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">
              Data Processing and Integration Hooks
            </h2>
            <p>
              Each Scanner is an individual tool. We took no part in building
              them and did not adjust them for our purposes, which is great,
              because, like so we can provide them as they are and ready for
              use.
            </p>
          </div>
          {hook.map((edge, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-6 col-sm-12 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                <IntegrationCard frontmatter={edge.node.frontmatter} />
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
            type
            state
            appVersion
          }
        }
      }
    }
    hook: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "hook" }
          type: { ne: "persistenceProvider" }
        }
      }
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
            type
            state
          }
        }
      }
    }
    persistenceProvider: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "hook" }
          type: { eq: "persistenceProvider" }
        }
      }
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
            type
            state
          }
        }
      }
    }
  }
`;

export default Integrations;
