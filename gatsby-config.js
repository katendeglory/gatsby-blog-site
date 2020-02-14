module.exports = {
  siteMetadata: {
    title: 'Gatsby Site',
    author: 'Glory Katende'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      }
    },
    `gatsby-transformer-remark`,
  ]
}
