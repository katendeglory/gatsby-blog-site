import React from 'react';
import { Link } from 'gatsby';
import Layout from './../components/Layout';

const About = () => {

  return (
    <Layout>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis veniam eum sequi deserunt laborum eaque, amet commodi magni nemo labore cupiditate iste ipsum dolor nobis minima vel. Reprehenderit, incidunt quibusdam.</p>
      <p>Need to talk <Link to="/contact">Contact Me</Link></p>
    </Layout>
  );
}

export default About;