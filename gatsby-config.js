module.exports = {
  siteMetadata: {
    title: `Jack Harner`,
    description: `Jack Harner is a Freelance Web Developer & E-Commerce Consultant based in Denver, Colorado. Shopify, BigCommerce, WordPress Dev & More.`,
    author: `@jackharner`,
    siteUrl: "https://jackharner.com",
  },
  trailingSlash: `always`,
  plugins: [
    "gatsby-plugin-catch-links",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageContent`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photoRoll`,
        path: `${__dirname}/content/photos`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonies`,
        path: `${__dirname}/content/testimonies`,
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Remote schema query type. This is an arbitrary name.
    //     typeName: "WPGraphQL",
    //     // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
    //     fieldName: "wpcontent",
    //     // GraphQL endpoint, relative to your WordPress home URL.
    //     url: "https://wp.jackharner.com/graphql",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-65838121-9",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jackharner`
      }
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "±",
              aliases: { js: "javascript" },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "jack",
                host: "localhost",
                global: true,
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: ['title']
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack Harner`,
        short_name: `JackHarner`,
        start_url: `/`,
        background_color: `#9C27B0`,
        theme_color: `#9C27B0`,
        display: `fullscreen`,
        icon: `src/images/jackharner-icon.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jackharner.com`,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            output: "/rss.xml",
            title: "Jack Harner's Web Dev Blog",
            custom_namespaces: { webfeeds: "http://webfeeds.org/rss/1.0" },
            custom_elements: [
              { "webfeeds:accentColor": "#9C27B0" },
              { "webfeeds:logo": "./src/images/jackharenr-logo-white.svg" },
            ],
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {fileAbsolutePath: {glob: "**/content/blog/**/*.md"}, frontmatter: {published: {eq: true}}}
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        html
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              resize(width: 500, height: 500, cropFocus: CENTER) {
                src
              }
            }
          }
        }
        fields {
          slug
          collection
          externalLink
          published
        }
      }
    }
  }
}`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
