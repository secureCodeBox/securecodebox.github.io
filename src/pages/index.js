import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import ReactTooltip from 'react-tooltip';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import features from '../data/features.json';
import tick from '../images/tick.svg';
import close from '../images/close.svg';

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
            secureCodeBox is an automated and scalable open source solution that
            can be used to integrate various security scanners with a simple and
            lightweight interface.
          </p>
        </div>
      </div>

      <div className="container pt-3 pb-2 pt-md-3 pb-md-3">
        <div className="row justify-content-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="col-12 col-md-3 col-lg-3 mb-2"
              data-tip={feature.description}
            >
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-3 pb-5 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-2">
              How does the secureCodeBox help our team?
            </h2>
          </div>
        </div>
        <div className="feature">
          <div className="feature-list">
            <ul className="pro">
              <li>
                <img src={tick} alt="checked icon" />
                SDLC support
              </li>
              <li>
                <img src={tick} alt="checked icon" />
                Highly scalable: multiple teams, applications and whole
                networks.
              </li>
              <li>
                <img src={tick} alt="checked icon" />
                Scans can range from low-hanging fruits to pen testing.
              </li>
            </ul>

            <ul className="con">
              <li>
                <img src={close} alt="unchecked icon" />
                We don't assign grades, someone needs to interpret the scan
                results.
              </li>
              <li>
                <img src={close} alt="unchecked icon" />
                Besides our examples, we do not provide many advanced,
                pre-configured scans.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ReactTooltip type="light" effect="solid" className="detailed-info" />
    </Layout>
  );
};

export default Home;
