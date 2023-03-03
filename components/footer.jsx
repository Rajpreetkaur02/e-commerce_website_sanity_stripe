import React from 'react';

import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contactdetails}>
      <div className={styles.company}>
          <span id={styles.footerheading}>COMPANY</span>
          <span>Contacy Us</span>
          <span>Terms</span>
          <span>Refund policy</span>
          <span>Privacy policy</span>
        </div>
        <div className={styles.callus}>
          <span id={styles.footerheading}>Call Us: 800-123-4567</span>
          <span>Mon-Fri: 9:00 am - 6:00 pm</span>
          <span>Sat: 9:00 am - 4:00 pm</span>
          <span>Sun: 9:00 am - 2:00 pm</span>
          <span id={styles.email}>Send us an email</span>
        </div>
        <div className={styles.followus}>
          <span id={styles.footerheading}>FOLLOW US</span>
          <span>facebook</span>
          <span>Youtube</span>
          <span>Instagram</span>
          <span>Linkedin</span>
          <span>Pinterest</span>
        </div>
      </div>
      <div className={styles.copyright}>Copyright@2023 Into The Wild</div>
    </div>
  )
}

export default Footer