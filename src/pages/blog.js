import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

const GET_POSTS = graphql`
  {
    allMarkdownRemark{
      totalCount
      edges{
        node{
          frontmatter{
            title
            date
          }
        }
      }
    }
  }
`;

const Blog = () => {

  const data = useStaticQuery(GET_POSTS);
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis veniam eum sequi deserunt laborum eaque, amet commodi magni nemo labore cupiditate iste ipsum dolor nobis minima vel. Reprehenderit, incidunt quibusdam.</p>

      <h1>Recent Posts:</h1>

      <ul>
        {edges.map((edge, i) => {
          return (
            <li key={i}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ul>

    </Layout>
  );
}

export default Blog;