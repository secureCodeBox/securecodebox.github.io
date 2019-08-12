/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: `secureCodeBox`,
    company: 'iteratec',
    description: '',
    // siteUrl: '',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'security@iteratec.de',
    },
    menuLinks: [
      // {
      //   name: 'Services',
      //   link: '/services',
      // },
      // {
      //   name: 'Team',
      //   link: '/team',
      // },
      // {
      //   name: 'Testimonials',
      //   link: '/testimonials',
      // },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
  ],
}
