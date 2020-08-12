import React from 'react';
import { withPrefix } from 'gatsby';

const IntegrationCard = (props) => {
  return (
    <div className="row integration-card hoverable">
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 integration-card-scanner-icon my-auto">
        <img
          className="scanner-icon"
          src={withPrefix(
            '/integrationIcons/' + props.frontmatter.title + '.svg'
          )}
          alt="persistence provider icon"
        ></img>
      </div>
      <div className="col-xl-8 col-lg-6 col-md-8 col-sm-8 col-8">
        <h2 className="integration-card-title">
          {props.frontmatter.title}
          {props.frontmatter.category === 'scanner'
            ? props.frontmatter.type.length > 0 && (
                <strong> ({props.frontmatter.type}) </strong>
              )
            : ''}
        </h2>
        <div className="integration-card-content">
          <p>{props.frontmatter.usecase}</p>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 integration-card-scanner-icon my-auto">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-6 col-6">
            {props.frontmatter.state.length > 0 &&
              props.frontmatter.state === 'released' && (
                <img
                  className="release"
                  src={withPrefix(
                    'https://img.shields.io/badge/State-' +
                      props.frontmatter.state +
                      '-green'
                  )}
                  alt="release version"
                ></img>
              )}
            {props.frontmatter.state.length > 0 &&
              props.frontmatter.state === 'developing' && (
                <img
                  className="release"
                  src={withPrefix(
                    'https://img.shields.io/badge/State-' +
                      props.frontmatter.state +
                      '-yellow'
                  )}
                  alt="release version"
                ></img>
              )}
            {props.frontmatter.state.length > 0 &&
              props.frontmatter.state === 'roadmap' && (
                <img
                  className="release"
                  src={withPrefix(
                    'https://img.shields.io/badge/State-' +
                      props.frontmatter.state +
                      '-lightgray'
                  )}
                  alt="release version"
                ></img>
              )}
          </div>
          <div className="col-lg-12 col-md-6 col-sm-6 col-6">
            {props.frontmatter.appVersion && (
              <img
                className="release"
                src={withPrefix(
                  'https://img.shields.io/badge/App_Version-' +
                    props.frontmatter.appVersion +
                    '-blue'
                )}
                alt="release version"
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
