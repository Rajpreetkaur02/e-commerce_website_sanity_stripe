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
                  width={250}
                  height={200}
                  className={styles.productimage}
                />
                <p className='productname'>{name}</p>
                <p className='productprice'>${price}</p>

            </div>
        </Link>
    </div>
  )
}

export default product