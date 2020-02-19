import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const GET_POSTS = graphql`
  {
    allMarkdownRemark{
      totalCount
      edges{
        node{
          frontmatter{
            title
            date
            slug
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
      <h1 className="y-margin">Blog Posts</h1>
      <p className="y-margin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis veniam eum sequi deserunt laborum eaque, amet commodi magni nemo labore cupiditate iste ipsum dolor nobis minima vel. Reprehenderit, incidunt quibusdam.</p>

      <h1 className="y-margin">Recent Posts:</h1>

      <ul className="blog-post-container">
        {edges.map((edge, i) => {
          return (
            <li key={i} className="blog-post">
              <Link to={`blog/${edge.node.frontmatter.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default Blog;