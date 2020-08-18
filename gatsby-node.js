const path = require("path");
const fs = require("fs");

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // TODO: Remove docs when #76 was merged & use docs template for git remote docs
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
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
        }
      `).then(result => {
        result.data.docs.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/doc.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.scanner.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/integration.js");
          createPage({
            path: `integrations/${node.frontmatter.path}`,
            component,
            context: {
              id: node.id
            }
          });
        });
        resolve();
      })
    );
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `File` && (node.base === `scan.yaml` || node.base === `findings.yaml`)) {
    fs.readFile(node.absolutePath, undefined, (_err, buf) => {
      createNodeField({ node, name: `content`, value: buf.toString() });
    });
    createNodeField({ node, name: `fileName`, value: node.base });
    createNodeField({ node, name: `scanTarget`, value: node.relativeDirectory.split('/examples/')[1] });
  }
}
