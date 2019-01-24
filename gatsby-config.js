module.exports = {
  siteMetadata: {
    title: 'Luxury dog clothing and accessories - Bone Idol Originals',
    businessName: 'Bone Idol',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/assets/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    // ADD YOUR PLUGINS HERE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `products`,
          path: `${__dirname}/static/products/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
