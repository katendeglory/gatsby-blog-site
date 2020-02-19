import React from 'react';
import Layout from './../components/Layout';
import { graphql } from 'gatsby';

const Blog = (props) => {
  // console.log(props);

  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}

export const query = graphql`
  query MarkdownRemark ($slug : String){
    markdownRemark(fields: {slug :{eq: $slug}}){
      frontmatter{
        title
        date
      }
      html
    }
  }
`;
export default Blog;