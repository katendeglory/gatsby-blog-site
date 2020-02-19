const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }  
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    actions.createPage({
      component: path.resolve('./src/templates/Blog.js'), //Rendering Template exporting a page query
      path: `/blog/${edge.node.frontmatter.slug}`, //URL To the page
      context: { slug: `${edge.node.frontmatter.slug}` } //Param to pass to the page query
    });
  });
}