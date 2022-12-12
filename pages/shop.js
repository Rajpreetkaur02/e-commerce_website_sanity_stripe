import React from 'react'

import { client } from '../lib/client';

import styles from '../styles/shop.module.css'

import Product from '../components/product';

import Header from '../components/header';

const shop = ({products}) => (
      
<div>
      <Header/>
      <div className={styles.productsheading}>
        <h2>Hi, happy to see you!</h2>
        <p>checkout these cool t-shirts and do little something for our wildlife buddies</p>
      </div>

      <div className={styles.productscontainer}>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
</div>
      
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return{
    props: { products }
  }
}

export default shop;