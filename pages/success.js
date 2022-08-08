import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import styles from '../styles/shop.module.css'

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className={styles.successwrapper}>
      <div className={styles.success}>
        <p className={styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={styles.emailmsg}>Check your email inbox for the receipt.</p>
        <p className={styles.description}>
          If you have any questions, please email
          <a className={styles.email} href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className={styles.btn}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success