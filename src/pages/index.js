import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_POSTS = gql`
  query {
    getPosts{
      _id
      username
      body
      createdAt
      likeCount
      commentCount
    }
  }
`;


const Index = () => {

  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) return <div>Loading</div>
  if (error) return <div>Error : {error.message}</div>

  console.log(data);

  //const posts = data;

  return (
    <Layout>
      <h1>Hello World</h1>
      <h2>Welcome To My Blog!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus laborum repellendus ad ut corrupti consequatur praesentium vitae itaque quidem in atque similique, nisi, voluptates ex! Maiores incidunt reprehenderit magni fugit ad veniam optio nam voluptatem vero, sequi accusantium iste eum, perferendis ea nemo laborum recusandae ipsa dolorem animi. Totam modi consequuntur voluptatibus ea eligendi magnam dolor voluptatum in nihil a repudiandae tempora debitis ut magni maxime fugit perferendis explicabo, quibusdam, quasi, nulla autem. Modi minus, iste earum ratione vel cupiditate. Suscipit tempore dolore eveniet magni assumenda quis quae fugiat nobis ex soluta omnis dicta, earum provident ea dolorem error.</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  );
}

export default Index;