import React, { useState } from 'react'
import styles from '../../styles/shop.module.css';

import  Product  from '../../components/product';

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client'

import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product, products}) => {
    const {image, name, details, price} = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

    const handleBuyNow = () => {
      onAdd(product, qty);
  
      setShowCart(true);
    }    
  return (
    <div>
        <div className={styles.productdetailcontainer}>
            <div>
                <div className={styles.productdetailimage}>
                    <img src={urlFor(image && image[index])} className={styles.productdetailimage}/>
                </div>  
                <div className={styles.smallimagescontainer}>
                
                    {image?.map((item,i)=>(
                        <img
                        key = {i}
                        src={urlFor(item)}
                        className={styles.smallimage}
                        onMouseEnter={() => setIndex(i)}
                        />
                    ))} 
            </div>
            </div>
            <div className={styles.productdetailsdesc}>
            <h1>{name}</h1>
          <div className={styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>

            </div>
            <h4>Details: </h4>
            <p>{details}</p>
          <p className={styles.price}>${price}</p>
          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <p className={styles.quantitydesc}>
              <span className={styles.minus} onClick={decQty}><AiOutlineMinus /></span>
              <span className={styles.num}>{qty}</span>
              <span className={styles.plus} onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.addtocart} onClick={() => onAdd(product,qty)}>Add to Cart</button>
            <button type="button" className={styles.buynow} onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
    </div>
     
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
    const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[type == "product"]`;
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return{
      props: { products, product}
    }
}

export default ProductDetails