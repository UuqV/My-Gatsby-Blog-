module.exports = {
  siteMetadata: {
    title: `Kathryn Lovell`,
    description: `Little Site for Big Ideas`,
    author: `Kathryn Lovell`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `18rfct2wxwn5`,
        accessToken: `BG29ZkIykIa3QitcOrKE4Es_5rRNE4ZdmVQDzQpMHTY`
      }
    },
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`
    },
    // {
    //   resolve: 'gatsby-source-contentful',
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/a-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
