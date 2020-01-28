/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const scannerRepos = [
  {
    name: 'Amass',
    url: 'https://github.com/secureCodeBox/scanner-infrastructure-amass',
  },
  {
    name: 'Arachni',
    url: 'https://github.com/secureCodeBox/scanner-webapplication-arachni',
  },
  {
    name: 'Nikto',
    url: 'https://github.com/secureCodeBox/scanner-webserver-nikto',
  },
  {
    name: 'Nmap',
    url: 'https://github.com/secureCodeBox/scanner-infrastructure-nmap',
  },
  {
    name: 'SSH',
    url: 'https://github.com/secureCodeBox/scanner-infrastructure-ssh',
  },
  {
    name: 'SSLyze',
    url: 'https://github.com/secureCodeBox/scanner-infrastructure-sslyze',
  },
  {
    name: 'Zap',
    url: 'https://github.com/secureCodeBox/scanner-webapplication-zap',
  },
  {
    name: 'WPScan',
    url: 'https://github.com/secureCodeBox/scanner-cms-wpscan',
  },
  {
    name: 'Ncrack',
    url: 'https://github.com/secureCodeBox/scanner-infrastructure-ncrack',
  },
];

module.exports = {
  siteMetadata: {
    title: `secureCodeBox`,
    company: `iteratec GmbH`,
    description: '',
    // siteUrl: '',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'security@iteratec.de',
    },
    // TODO: replace links with actual pages here and link the correct reference in Menu.js
    menuLinks: [
      {
        name: 'Get Started',
        external: true,
        // link: '/getStarted',
        link: 'https://github.com/secureCodeBox/secureCodeBox',
      },
      {
        name: 'Docs',
        external: true,
        // link: '/docs',
        link:
          'https://github.com/secureCodeBox/secureCodeBox/tree/master/docs/index.md',
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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://securecodebox.us16.list-manage.com/subscribe/post?u=3aeba03d53798fc931e449d46&amp;id=252edbca74',
      },
    },

    ...scannerRepos.map(({ name, url }) => {
      return {
        resolve: `gatsby-source-git`,
        options: {
          name: name,
          remote: url,
          branch: `master`,
          patterns: `README.md`,
        },
      };
    }),
  ],
};
