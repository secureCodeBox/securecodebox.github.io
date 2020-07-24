import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Integration = props => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  const scanner = props.data.scanner.edges;
  const persistenceProvider = props.data.persistenceProvider.edges;

  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
        <nav className="sidebar">
          <h1 className="sidebar-header">Scanner</h1>
          <ul className="list-unstyled components">
            {scanner.map(scanner => (
              <li key={scanner.node.frontmatter.title}>
                <Link
                  to={`/integrations/${scanner.node.frontmatter.path}`}
                  activeClassName="active-Link"
                >
                  {scanner.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="sidebar-header">Persistence provider</h1>
          <ul className="list-unstyled components">
            {persistenceProvider.map(persistenceProvider => (
              <li key={persistenceProvider.node.frontmatter.title}>
                <Link
                  to={`/integrations/${persistenceProvider.node.frontmatter.path}`}
                  activeClassName="active-Link"
                >
                  {persistenceProvider.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="content">
          <div className="container-fluid" id="integration-doc">
            <h1 className="title">{title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
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

export default Integration;
