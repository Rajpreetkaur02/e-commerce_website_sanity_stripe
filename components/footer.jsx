import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

import styles from '../styles/shop.module.css';

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <p>2022 Into the wild All rights reserverd</p>
      <p className={styles.icon}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer