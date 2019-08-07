module.exports = {
  pathPrefix: `/jackharner-gatsby`,
  siteMetadata: {
    title: `Jack Harner`,
    description: `Jack Harner is a freelance Web Developer & Graphic Designer.`,
    author: `@jackharner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
 {   resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: process.env.GA,
    }},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E91E63`,
        theme_color: `#E91E63`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
