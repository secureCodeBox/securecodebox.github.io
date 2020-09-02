import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import groupBy from "lodash/groupBy";
import map from "lodash/map";

import Layout from "../components/Layout";
import ScannerExamples from "../components/ScannerExamples.js";
import Sidebar from "../components/Sidebar.js";

deckDeckGoHighlightElement();

const Integration = (props) => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;

  const scanners = props.data.scanner.edges;
  const persistenceProviders = props.data.persistenceProvider.edges;
  const hooks = props.data.hook.edges;

  const examplesRaw = props.data.examples.nodes.map(({ fields }) => fields);
  const exampleReadMes = props.data.exampleReadMes.edges;

  // Transforms the examples and readme into one big array with he following structure:
  // [{ name: "example.com", description: "<html>description", scan: "yaml...", findings: "yaml..."}]
  const examples = map(
    groupBy(examplesRaw, ({ scanTarget }) => scanTarget),
    (examples, scanTarget) => {
      console.log({ examples, scanTarget });
      return {
        name: scanTarget,
        scan: examples.find(({ fileName }) => fileName === "scan.yaml")
          ?.content,
        findings: examples.find(({ fileName }) => fileName === "findings.yaml")
          ?.content,
        description: exampleReadMes.find(
          (x) => x.node.frontmatter.title === scanTarget
        )?.node.html,
      };
    }
  );
  const showExamples = examples.length > 0;

  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
        <Sidebar
          categories={[
            { categoryName: "Scanners", entries: scanners },
            {
              categoryName: "Persistence Providers",
              entries: persistenceProviders,
            },
            { categoryName: "Hooks", entries: hooks },
          ]}
          currentPathname={props.location.pathname}
        />
        <div id="content">
          <div className="container-fluid" id="integration-doc">
            <h1 className="title">{title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {showExamples && <ScannerExamples examples={examples} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $exampleFilter: String!) {
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
    examples: allFile(
      filter: {
        base: { regex: "/(findings|scan).yaml/" }
        relativeDirectory: { regex: $exampleFilter }
        extension: { eq: "yaml" }
      }
    ) {
      edges {
        node {
          base
          relativeDirectory
        }
      }
      nodes {
        fields {
          content
          fileName
          scanTarget
        }
      }
    }
    exampleReadMes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $exampleFilter } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Integration;
