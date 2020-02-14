import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis quas asperiores? Est possimus quae adipisci natus dolor officiis debitis laboriosam quisquam atque? Repellat, at asperiores. Impedit ullam harum excepturi!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  );
}

export default Index;