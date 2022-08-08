import React from 'react'


import styles from '../styles/home.module.css'

const  Home = () => {
  return (
    <div className={styles.home}>
            
            <div className={styles.left}>

              <img src='/images/butterflies.gif' className={styles.butterflies1}/>
              <img src='/images/butterflies.gif' className={styles.butterflies2}/>

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
                    <p>The revenue generated from this business goes straight to the NGO's working towards the wildlife conservation</p>
                    <p>If you are a wildlife lover like us, buy a cool t-shirt for yourself and a life for a wildlife buddy! </p>
                </div>
            </div>
    </div>
  )
}

export default Home;