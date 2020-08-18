import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Img from 'gatsby-image';

const GetStarted = (props) => {
  const tutorials = props.data.ServicesQuery.edges;
  return (
    <Layout bodyClass="page-getStarted">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Getting Started</h1>
              <h2>User and developer oriented documentation</h2>
              <span>
                How To:
                <ul>
                  <li>
                    Start
                    <ul>
                      <li>Operator</li>
                      <li>Scanner</li>
                      <li>Persistence Provider</li>
                    </ul>
                  </li>
                  <li>Hooks</li>
                  <li>Contribute</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Img
        fluid={props.data.ImageGetStartedQuery.childImageSharp.fluid}
        alt="people"
      />

      <div className="container  pb-2  pb-md-3">
        <div className="row justify-content-center">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="feature">
              <h1>{tutorial.node.frontmatter.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    ServicesQuery: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/docs/" } }
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            category
          }
        }
      }
    }
    ImageGetStartedQuery: file(
      relativePath: { eq: "images/GetStarted.png" }
    ) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default GetStarted;
