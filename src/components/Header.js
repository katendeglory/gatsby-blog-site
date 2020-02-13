import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'

const Header = () => {
  return (
    <Navigation>
      <div className="brand">GATSBY</div>
      <ul>
        <li><Link class="link" to="/">Home</Link></li>
        <li><Link class="link" to="/about">About</Link></li>
        <li><Link class="link" to="/blog">Blog</Link></li>
        <li><Link class="link" to="/contact">Contact</Link></li>
      </ul>
    </Navigation>
  );
}

const Navigation = styled.nav`
  margin: 0;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: palevioletred;
  box-shadow: 0 1px 5px 0 rgba(84, 84, 84, 0.2), 0 2px 2px 0 rgba(84, 84, 84, 0.2), 0 3px 1px -2px rgba(84, 84, 84, 0.2);

  .brand{
    white-space: nowrap;
  }

  ul{
    list-style: none;
    display: flex;
    justify-content: end;
    margin: 0;

    li{
      a{
        transition: .5s;
        text-decoration:none;
        color: inherit;
        display: inline-block;
        padding: 20px 25px;

        &:hover{
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;

export default Header;