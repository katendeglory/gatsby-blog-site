module.exports = {
  siteMetadata: {
    title: 'Gatsby Site',
    author: 'Glory Katende'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      }
    }
  ]
}
