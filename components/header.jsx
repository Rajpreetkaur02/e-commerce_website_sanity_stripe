import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

import styles from '../styles/header.module.css'

import  Cart  from './cart';

import { useStateContext } from '../context/StateContext';


const header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className={styles.navbar}>
      <img src='/images/logo.png' className={styles.logo}/>
      <button type="button" className={styles.carticon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={styles.cartitemqty}>{totalQuantities}</span>
      </button>

       {showCart && <Cart />}   
    </div>
  )
}

export default header