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
          let componentName = '';
          if (node.frontmatter.path) {
            // The path consists normally like "scanners/nmap" or "hook/persistence-elastic"
            componentName = node.frontmatter.path.split('/')[1];
          }

          if (
            node.frontmatter.category === 'scanner' ||
            node.frontmatter.category === 'hook'
          ) {
            const component = path.resolve('src/templates/integration.js');
            createPage({
              path: `integrations/${node.frontmatter.path}`,
              component,
              context: {
                id: node.id,
                exampleFilter: `/${componentName}/examples/`,
              },
            });
          } else if (
            node.frontmatter.category === 'develop' ||
            node.frontmatter.category === 'use'
          ) {
            const component = path.resolve('src/templates/doc.js');
            createPage({
              path: `getStarted/${node.frontmatter.path}`,
              component,
              context: {
                id: node.id,
                exampleFilter: `/${componentName}/examples/`,
              },
            });
          }
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
