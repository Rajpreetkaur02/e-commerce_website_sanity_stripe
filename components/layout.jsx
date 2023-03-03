import React from 'react';
import Head from 'next/head';

import Navbar from './navbar';
import Footer from './footer';

import Header from '../components/header';

import styles from '../styles/shop.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Into the Wild</title>
      </Head>
      <header>
        {/* <Navbar /> */}
      </header>
      
      <main className={styles.maincontainer}>
        {children}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default Layout;