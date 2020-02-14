import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/index.scss";
import LayoutStyles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.siteWrapper}>
      <Header />
      <main className={LayoutStyles.wrapper}>
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;