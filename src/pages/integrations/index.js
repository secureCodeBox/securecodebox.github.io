import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const Integration = props => {
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
                If you miss your favorite security Scanner or tool you can easily integrate 
                it by adding a contribution (GitHub Pull Request) or contact 
                us if you want help with it.
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
                  <div className="row integration-card hoverable">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 integration-card-scanner-icon my-auto">
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
                  <div className="col-xl-8 col-lg-6 col-md-8 col-sm-8 col-8">
                    <h2 className="integration-card-title">
                      {edge.node.frontmatter.title} 
                      {edge.node.frontmatter.type.length > 0 &&
                        <strong>   ({edge.node.frontmatter.type}) </strong>
                      }
                    </h2>
                    <div className="integration-card-content">
                      <p>{edge.node.frontmatter.usecase}</p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 integration-card-scanner-icon my-auto">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "released" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-green'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "developing" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-yellow'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "roadmap" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-lightgray'
                            )}
                          alt="release version"
                        ></img>
                      }
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                        {edge.node.frontmatter.appVersion &&
                          <img
                            className="release"
                            src={withPrefix(
                              'https://img.shields.io/badge/App_Version-' +
                              edge.node.frontmatter.appVersion +
                              '-blue'
                              )}
                            alt="release version"
                          ></img>
                          }
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container pb-2 pb-md-3">
        <div className="row left-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">Data Processing and Integration-card Hooks</h2>
            <p>
                Each Scanner is an individual tool. We took no part in building
                them and did not adjust them for our purposes, which is great,
                because, like so we can provide them as they are and ready for
                use.
            </p>
          </div>
          {hook.map(edge => (
            <div
              key={edge.node.id}
              className="col-12 col-md-6 col-lg-6 col-sm-12 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                  <div className="row integration-card hoverable">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 integration-card-scanner-icon my-auto">
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
                  <div className="col-xl-8 col-lg-6 col-md-8 col-sm-8 col-8">
                    <h2 className="integration-title">
                      {edge.node.frontmatter.title}
                    </h2>
                    <div className="integration-content">
                      <p>{edge.node.frontmatter.usecase}</p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 integration-card-scanner-icon my-auto">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "released" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-green'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "developing" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-yellow'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "roadmap" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-lightgray'
                            )}
                          alt="release version"
                        ></img>
                      }
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                        {edge.node.frontmatter.appVersion &&
                          <img
                            className="release"
                            src={withPrefix(
                              'https://img.shields.io/badge/App_Version-' +
                              edge.node.frontmatter.appVersion +
                              '-blue'
                              )}
                            alt="release version"
                          ></img>
                          }
                      </div>
                    </div>
                  </div>
                </div>
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
          {persistenceProvider.map(edge => (
            <div
              key={edge.node.id}
              className="col-12 col-md-6 col-lg-6 col-sm-12 mb-2 no-highlight"
            >
              <Link to={edge.node.frontmatter.path}>
                  <div className="row integration-card hoverable">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 integration-card-scanner-icon my-auto">
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
                  <div className="col-xl-8 col-lg-6 col-md-8 col-sm-8 col-8">
                    <h2 className="integration-title">
                      {edge.node.frontmatter.title}
                    </h2>
                    <div className="integration-content">
                      <p>{edge.node.frontmatter.usecase}</p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 integration-card-scanner-icon my-auto">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "released" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-green'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "developing" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-yellow'
                            )}
                          alt="release version"
                        ></img>
                      }
                      {edge.node.frontmatter.state.length > 0 && edge.node.frontmatter.state === "roadmap" &&
                        <img
                          className="release"
                          src={withPrefix(
                            'https://img.shields.io/badge/State-' +
                            edge.node.frontmatter.state +
                            '-lightgray'
                            )}
                          alt="release version"
                        ></img>
                      }
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                        {edge.node.frontmatter.appVersion &&
                          <img
                            className="release"
                            src={withPrefix(
                              'https://img.shields.io/badge/App_Version-' +
                              edge.node.frontmatter.appVersion +
                              '-blue'
                              )}
                            alt="release version"
                          ></img>
                          }
                      </div>
                    </div>
                  </div>
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
          category: { eq: "hook" }, 
      	  type: {ne: "persistenceProvider"}
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
      	  category: {eq: "hook"}, 
      	  type: {eq: "persistenceProvider"}
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

export default Integration;
