import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const GET_SITE_METADATA = graphql`
  query {
    site{
      siteMetadata{
        title
        author
      }
    }
  }
`;

const Footer = () => {

  const data = useStaticQuery(GET_SITE_METADATA);

  return (
    <footer>
      <p>{data.site.siteMetadata.title}, Created by {data.site.siteMetadata.author} © 2020</p>
    </footer>
  )
}

export default Footer;