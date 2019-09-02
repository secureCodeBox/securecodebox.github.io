const path = require("path");

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
            filter: {fileAbsolutePath: { regex: "/gatsby-source-git/"} }
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
        result.data.getStarted.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/getStarted.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.docs.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/docs.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.scanner.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/scanner.js");
          createPage({
            path: node.frontmatter.path,
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
