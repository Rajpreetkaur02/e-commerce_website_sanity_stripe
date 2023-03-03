import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import styles from '../styles/Navbar.module.css';

import { BiSearchAlt2 } from "react-icons/bi";

import  Cart  from './cart';

import { useStateContext } from '../context/StateContext';

const Navbar = () => {
const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.navbar}>
        <img src='/images/logo.png' alt='logo' className={styles.logo}/>
        <div className={styles.list}>
        <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/shop">
            <li>Sale</li>
          </Link>
          <Link href="/shop">
            <li>About Us</li>
          </Link>
        </div>
        <div className={styles.searchbar}>Search<BiSearchAlt2 className={styles.icon}/></div>
        <button type="button" className={styles.carticon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={styles.cartitemqty}>{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
        <Link href="/">
          <button className={styles.button}>Contact</button>
        </Link>
        
      </div> 
  )
}

export default Navbar