/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `secureCodeBox`,
    company: `iteratec GmbH`,
    description: '',
    // siteUrl: '',
    contact: {
      phone: '+49 89 614551-0',
      email: 'security@iteratec.com',
    },
    // TODO: replace links with actual pages here and link the correct reference in Menu.js
    menuLinks: [
      {
        name: 'Get Started',
        external: true,
        // link: '/getStarted',
        link: 'https://github.com/secureCodeBox/secureCodeBox-v2-alpha',
      },
      {
        name: 'Docs',
        external: true,
        // link: '/docs',
        link:
          'https://github.com/secureCodeBox/secureCodeBox-v2-alpha/blob/master/docs/index.md',
      },
      {
        name: 'Integrations',
        external: false,
        link: '/integrations',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, //should be listed *after* gatsby-plugin-manifest
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `secureCodeBox-v2-alpha`,
        remote: `https://github.com/secureCodeBox/secureCodeBox-v2-alpha`,
        branch: `master`,
        patterns: `scanners`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scanners`,
        path: `${__dirname}/.cache/gatsby-source-git/secureCodeBox-v2-alpha/scanners`,
      }
    }
  ],
};
