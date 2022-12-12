import React from 'react'
import {GiTShirt} from 'react-icons/gi'
import {GiHoodie} from 'react-icons/gi'
import {GiBunnySlippers} from 'react-icons/gi'
import {GiSocks} from 'react-icons/gi'

import styles from '../styles/ourproducts.module.css'

const ourProducts = () => {
  return (
      <div className={styles.CounterHeroContainer}>
      <h2 className={styles.H2}>OUR PRODUCTS</h2>
      <div className={styles.CounterHeroInnerContainer}>
        <div className={styles.CounterHeroTextContainer}>
          <GiTShirt size={120}/>
          <div className = {styles.CounterHeroText1}>TShirts</div>
        </div>
        <div className={styles.CounterHeroTextContainer}>
          <GiHoodie size={120}/>
          <div className = {styles.CounterHeroText1}>Hoodies</div>
        </div>
        <div className={styles.CounterHeroTextContainer}>
          <GiBunnySlippers size={120}/>
          <div className = {styles.CounterHeroText1}>Slippers</div>
        </div>
        <div className={styles.CounterHeroTextContainer}>
          <GiSocks size={120}/>
          <div className = {styles.CounterHeroText1}>Socks</div>
        </div>
        </div>
      </div>
  )
}

export default ourProducts