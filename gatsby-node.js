const path = require('path');

//On create node, create a slug connection
module.exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    console.log("@@@@@@@@@@@@@@@@@@@@@", slug);

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

//For each slug create a page and pass the slug to the context for the template
module.exports.createPages = async ({ graphql, actions }) => {

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }  
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    actions.createPage({
      component: path.resolve('./src/templates/Blog.js'),
      path: `/blog/${edge.node.fields.slug}`,
      context: { slug: edge.node.fields.slug }
    });
  });
}