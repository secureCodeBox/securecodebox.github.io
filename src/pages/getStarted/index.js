import React from 'react';
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Img from 'gatsby-image';

const GetStarted = (props) => {
  const docs = props.data.ServicesQuery.edges.filter(function(doc) {
    return doc.node.frontmatter.path !== null;
  });
  return (
    <Layout bodyClass="page-getStarted">
      <SEO title="Services" />
      <div className="intro">
        <div className="background-plane">
          <Img
            fluid={props.data.ImageGetStartedQuery.childImageSharp.fluid}
            alt="people"
            objectFit="cover"
            className="background-image bottom"
          />
        </div>
        <div className="container">
          <div className="text-box with-element-right">
            <div className="row">
              <div className="col-12">
                <h1>Getting Started</h1>
                <h2>Documentation for user and developer</h2>
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
            <div className="container  pb-2  pb-md-3 doc-selection">
              <div className="row docs">
                {docs.map((doc, index) => (
                  <Link key={index} to={doc.node.frontmatter.path}>
                    <div className="feature hoverable">
                      <div className="feature-image">
                        <img
                          src={withPrefix(
                            `/features/${doc.node.frontmatter.title}.svg`
                          )}
                          alt={doc.node.frontmatter.title}
                        />
                      </div>
                      <h2 className="feature-title">
                        {doc.node.frontmatter.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
    ImageGetStartedQuery: file(relativePath: { eq: "images/GetStarted.png" }) {
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
