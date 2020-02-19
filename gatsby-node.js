const path = require('path');

/*
  Parses the file system to create node fields for markdown files that create page will query
  Created nodes will be queriable at allMarkdownRemark.edges.node.fields.slug
  ⚠ In the next project, just drop this over-engineered way of doing stuffs, just put the 
      Slugs in the ---front matter---
*/
module.exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    console.log("@@@@@@@@@@@@@@@@@@@@@", slug);

    actions.createNodeField({
      node: node,
      name: 'slug',
      value: slug
    });
  }
}

/*
  Get the fields created above and create pages for each of them
*/
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
      // Is the argument passed to the page's query
      context: { slug: edge.node.fields.slug }
    });
  });
}