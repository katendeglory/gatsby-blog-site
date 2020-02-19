import React from 'react'
import { Link } from 'gatsby';
import headerStyles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Link className={headerStyles.brand} to="/">
        <img className={headerStyles.brandLogo} src="https://cdn0.iconfinder.com/data/icons/hats-caps-twotone/48/Clothing_Hats__Caps_Artboard_32-128.png" alt="hat" />
        <span className={headerStyles.brandText}>GATSBY</span>
      </Link>
      <ul>
        <li><Link to="/" activeClassName={headerStyles.active}>Home</Link></li>
        <li><Link to="/about" activeClassName={headerStyles.active}>About</Link></li>
        <li><Link to="/blog" partiallyActive={true} activeClassName={headerStyles.active}>Blog</Link></li>
        <li><Link to="/contact" activeClassName={headerStyles.active}>Contact</Link></li>
      </ul>
    </header>
  );
}

export default Header;