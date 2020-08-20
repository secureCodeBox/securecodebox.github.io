const path = require("path");
const fs = require("fs");

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          getStarted: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/getStarted/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                }
                excerpt
              }
            }
          }
          docs: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/docs/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                }
                excerpt
              }
            }
          }
          scanner: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/gatsby-source-git/" } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  category
                }
                id
                excerpt
              }
            }
          }
          persistenceProvider: allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "/integrations/persistence-provider/" }
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  category
                }
                id
              }
            }
          }
        }
      `).then((result) => {
        result.data.getStarted.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/getStarted.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.docs.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/docs.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.scanner.edges.forEach(({ node }) => {
          console.log(node.frontmatter);
          const component = path.resolve("src/templates/integration.js");

          let componentName = "";
          if (node.frontmatter.path) {
            // The path consists normally like "scanners/nmap" or "hook/persistence-elastic"
            componentName = node.frontmatter.path.split("/")[1];
          }

          createPage({
            path: `integrations/${node.frontmatter.path}`,
            component,
            context: {
              id: node.id,
              exampleFilter: `/${componentName}/examples/`,
            },
          });
        });
        result.data.persistenceProvider.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/integration.js");

          let componentName = "";
          if (node.frontmatter.path) {
            // The path consists normally like "scanners/nmap" or "hook/persistence-elastic"
            componentName = node.frontmatter.path.split("/")[1];
          }

          console.log("filter");
          console.log(`/${componentName}/examples/`);

          createPage({
            path: `integrations/${node.frontmatter.path}`,
            component,
            context: {
              id: node.id,
              exampleFilter: `/${componentName}/examples/`,
            },
          });
        });
        resolve();
      })
    );
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `File` &&
    (node.base === `scan.yaml` || node.base === `findings.yaml`)
  ) {
    fs.readFile(node.absolutePath, undefined, (_err, buf) => {
      createNodeField({ node, name: `content`, value: buf.toString() });
    });
    createNodeField({ node, name: `fileName`, value: node.base });
    createNodeField({
      node,
      name: `scanTarget`,
      value: node.relativeDirectory.split("/examples/")[1],
    });
  }
};
