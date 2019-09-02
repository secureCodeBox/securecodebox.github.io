import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout";

const Scanner = props => {
  const scanner = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-scanner">
      <SEO title="Scanner" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Scanner</h1>
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
          {scanner.map(edge => (
            <div
              key={edge.node.id}
              className="col-12 col-md-6 col-lg-6 col-sm-12 mb-2"
            >
              <div className="feature">
                {/* TODO add images 
                    {edge.node.image && (
                      <div className="feature-image">
                        <img src={withPrefix(edge.node.image)} />
                      </div>
                    )} */}
                <Link
                  to={edge.node.frontmatter.path}
                  
                >
                  <h2 className="feature-title">
                    {edge.node.frontmatter.title}
                  </h2>
                </Link>
                <div className="feature-content">
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ScannerQuery {
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
          }
          excerpt
        }
      }
    }
  }
`;

export default Scanner;
