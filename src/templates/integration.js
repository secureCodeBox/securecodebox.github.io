import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Integration = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const scanner = data.allMarkdownRemark.edges;

  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
        <nav className="sidebar">
          <ul class="list-unstyled components">
            {scanner.map(scanner => (
              <li>
                <Link
                  to={scanner.node.frontmatter.path}
                  activeClassName="active-Link"
                >
                  {scanner.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="content">
          <div class="container-fluid" id="integration-doc">
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
    allMarkdownRemark(
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
  }
`;

export default Integration;
