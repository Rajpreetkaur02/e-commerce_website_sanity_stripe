import React from 'react'
import Link from 'next/link';

import styles from '../styles/header.module.css';
const header = () => {
  return (
    <div className={styles.header}>
            
            <img src="/images/logo.png" className={styles.logo}/>
    
                <ul className={styles.headermenu}>
                  <Link href="/shop" >
                    <button className={styles.btn}><div><span>SHOP</span></div></button>
                  </Link>
                    
                </ul>
    
            </div>
  )
}

export default header