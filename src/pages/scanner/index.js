import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const Scanner = (props) => {
  const scanner = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-scanner">
      <SEO title="Scanner" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Scanner</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        {/* <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title">{edge.node.frontmatter.title}</h2>
                  <p className="testimonials-name">{edge.node.frontmatter.name}</p>
                  <p className="testimonials-jobtitle">{edge.node.frontmatter.jobtitle}</p>
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/scanner/" } }
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

export default Scanner;
