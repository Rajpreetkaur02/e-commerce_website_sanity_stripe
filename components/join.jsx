import React from 'react'

import styles from '../styles/join.module.css'

const join = () => {
  return (
    <div className={styles.join}>
            <img src='/images/forest.jpg' className={styles.forest}/> 
            <div className={styles.left}>
                <span>Join Our <br/>Community</span> 
                <button className={styles.btn}>Join Now</button>   
            </div>
            <img src='/images/elephant.jpg' className={styles.elephant}/>
        </div>
  )
}

export default join