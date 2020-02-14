import React from 'react'
import { Link } from 'gatsby';
import headerStyles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Link className={headerStyles.brand} to="/">
        <img src="https://cdn0.iconfinder.com/data/icons/hats-caps-twotone/48/Clothing_Hats__Caps_Artboard_32-128.png" alt="hat" />
        GATSBY
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}

export default Header;