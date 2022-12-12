import React from 'react'
import Link from 'next/link';
import styles from '../styles/home.module.css'


const home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.navbar}>
        <img src='/images/logo.png' className={styles.logo}/>
        <Link href="/shop">
          <button type='button' className={styles.button}>Shop</button>
        </Link>
        
      </div>
      <div className={styles.content}>
      <div className={styles.quote}>
                    <div className={styles.sliding}></div>
                    <span>the wildlife and it's habitat cannot speak, so we must and we will</span>
                </div> 

                <div className={styles.hometext}>
                    <ul className={styles.dynamictext}>
                        <li><span id='gift'>Buy a gift!</span></li>
                        <li><span id='vol'>cool graphic t-shirts</span></li>
                        <li><span id='blog'>much more coming soon</span></li>
                        <li><span id='aware'>spread awareness</span></li>
                    </ul>
                </div>
                <div className={styles.statictext}>
                    <p>The revenue generated from this business goes straight to the NGO's working towards the wildlife conservation</p>
                    <p>If you are a wildlife lover like us, buy a cool t-shirt for yourself and a life for a wildlife buddy! </p>
                    <Link href="/shop">
                      <button type='button' className={styles.mainbutton}>Shop now</button>
                    </Link>
                </div>          
      </div>
      <div className={styles.sidebar}>
        <img src='/images/menu.png' className={styles.menu}/>

        <div className={styles.socialLinks}>
          <img src='/images/fb.png' />
          <img src='/images/ig.png' />
          <img src='/images/tw.png' />
        </div>
        <div className={styles.usefulLinks}>
          <img src='/images/share.png'/>
          <img src='/images/info.png'/>
        </div>
      </div>
      
    </div>
  )
}

export default home