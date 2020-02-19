module.exports = {
  siteMetadata: {
    title: 'Gatsby Site',
    author: 'Glory Katende'
  },
  pathPrefix: 'gatsby-blog-site',
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1250
            }
          }
        ]
      }
    }
  ]
}