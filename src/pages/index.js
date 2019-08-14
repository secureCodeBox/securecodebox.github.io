import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from "../components/Layout";

const Home = (props) => {
  const json = props.data.allFeaturesJson.edges;
    return(
        <Layout bodyClass="page-home">
          <SEO title="Home" />
          <Helmet>
            <meta
              name="description"
              content="The official secureCodeBox Website."
            />
          </Helmet>
          <div className="intro pb-4">
            <div className="container">
              <h1>secureCodeBox - Testing your Software Security.</h1>
              <p>
                secureCodeBox is a docker based, modularized toolchain for continuous security scans of your software project.
                Its goal is to orchestrate and easily automate a bunch of security-testing tools out of the box.
            </p>
            </div>
          </div>
             
        <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="title-3 text-dark mb-4">What the secureCodeBox provides</h2>
            </div>
            {json.map(edge => (
              <div key={edge.node.id} className="col-12 col-md-3 col-lg-3 mb-2">
                <div className="feature">
                  {edge.node.image && (
                    <div className="feature-image">
                      <img src={withPrefix(edge.node.image)} />
                    </div>
                  )}
                  <h2 className="feature-title">{edge.node.title}</h2>
                  <div className="feature-content">{edge.node.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-5 pb-md-7">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">When is the secureCodeBox right for your team?</h2>
          </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
   query {
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;