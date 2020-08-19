const path = require('path');
const fs = require('fs');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          git: allMarkdownRemark(
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
      `).then((result) => {
        result.data.git.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/doc.js');
          createPage({
            path: `getStarted/${node.frontmatter.path}`,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.git.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/integration.js');
          createPage({
            path: `integrations/${node.frontmatter.path}`,
            component,
            context: {
              id: node.id,
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
      value: node.relativeDirectory.split('/examples/')[1],
    });
  }
};
