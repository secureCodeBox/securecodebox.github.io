import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ScannerExamples from '../components/ScannerExamples.js';
import Sidebar from '../components/Sidebar.js'

const Integration = (props) => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;
  const scanners = props.data.scanner.edges;
  const persistenceProviders = props.data.persistenceProvider.edges;
  const hooks = props.data.hook.edges;

  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
        <Sidebar dataArray={[scanners, persistenceProviders, hooks]}/>
        <div id="content">
          <div className="container-fluid" id="integration-doc">
            <h1 className="title">{title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <ScannerExamples scanner={props.path} />
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
    scanner: allMarkdownRemark(
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
            type
            state
            appVersion
          }
        }
      }
    }
    hook: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "hook" }
          type: { ne: "persistenceProvider" }
        }
      }
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
            type
            state
          }
        }
      }
    }
    persistenceProvider: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "hook" }
          type: { eq: "persistenceProvider" }
        }
      }
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
            type
            state
          }
        }
      }
    }
  }
`;

export default Integration;
