import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const Provisions = (props) => {
    const provisions = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-provisions">
            <SEO title="Provisions" />
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>The secureCodeBox provides:</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {provisions.map(edge => (
                        <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
                            <div className="card provision provision-teaser">
                                <div className="card-content">
                                    <h2>
                                        <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                                    </h2>
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
  query ProvisionsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/provisions/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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

export default Provisions;
