import React from 'react'

import Link from 'next/link';``

import { urlFor } from '../lib/client';

import styles from '../styles/shop.module.css'

const product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div className={styles.productcard}>
                <img
                  src={urlFor(image && image[0])}
                  width={400}
                  height={330}
                  className={styles.productimage}
                />
                <p className={styles.productname}>{name}</p>
                <p className={styles.productprice}>Rs. {price}</p>

            </div>
        </Link>
    </div>
  )
}

export default product