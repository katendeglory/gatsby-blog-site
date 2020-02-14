const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // console.log(node);

    const slug = path.basename(node.fileAbsolutePath, '.md');
    console.log("@@@@@@@@@@@@@@@@@@@@@", slug);

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}