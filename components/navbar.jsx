import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import styles from '../styles/shop.module.css';

import  Cart  from './cart';

import { useStateContext } from '../context/StateContext';

const Navbar = () => {
const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.navbarcontainer}>

      <button type="button" className={styles.carticon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={styles.cartitemqty}>{totalQuantities}</span>
      </button>

       {showCart && <Cart />}   
    </div>
  )
}

export default Navbar