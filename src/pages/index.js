import React from "react";
import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import approved from "../images/approved.svg";
import notApproved from "../images/not approved.svg";

import features from "../data/features.json";

const Home = () => {
  return (
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
          <h1>secureCodeBox</h1>
          <h2>Testing your Software Security</h2>
          <p>
            secureCodeBox is a docker based, modularized toolchain for
            continuous security scans of your software project. Its goal is to
            orchestrate and easily automate a bunch of security-testing tools
            out of the box.
          </p>
        </div>
      </div>

      <div className="container pt-3 pb-2 pt-md-3 pb-md-3">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">
              What the secureCodeBox provides:
            </h2>
          </div>
          {features.map(feature => (
            <div key={feature.id} className="col-12 col-md-3 col-lg-3 mb-2">
              <div className="feature hoverable">
                {feature.image && (
                  <div className="feature-image">
                    <img
                      src={withPrefix(feature.image)}
                      alt={feature.altText}
                    />
                  </div>
                )}
                <h2 className="feature-title">{feature.title}</h2>
                {/* TODO add link to corresponding pages */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-3 pb-5 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">
              When is the secureCodeBox right for your team?
            </h2>
          </div>
        </div>
        <div className="feature">
          <div className="feature-list">
            <ul className="pro">
              <li>
                <img src={approved} alt="checked icon" />
                Teams with an already medium to advanced security program
              </li>
              <li>
                <img src={approved} alt="checked icon" />
                Multi-team setups
              </li>
              <li>
                <img src={approved} alt="checked icon" />
                Integration into fast moving teams
              </li>
            </ul>

            <ul className="con">
              <li>
                <img src={notApproved} alt="unchecked icon" />
                As the first security steps
              </li>
              <li>
                <img src={notApproved} alt="unchecked icon" />
                Organizations with separate dev, ops and security teams
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
