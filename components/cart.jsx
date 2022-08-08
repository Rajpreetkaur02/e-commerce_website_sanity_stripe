import React, { useRef } from 'react';

import Link from 'next/link';

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';

import { TiDeleteOutline } from 'react-icons/ti';

import toast from 'react-hot-toast';

import styles from '../styles/shop.module.css'

import { useStateContext } from '../context/StateContext';

import { urlFor } from '../lib/client';

import getStripe from '../lib/getStripe';

const Cart = () => {
  
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartitemQuantity, onRemove } = useStateContext();

    const handleCheckout = async () => {
      const stripe = await getStripe();

      const response = await fetch('/api/stripe',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });

      if(response.statusCode === 500) return;

      const data = await response.json();

      toast.loading('Redirecting...');

      stripe.redirectToCheckout({ sessionId: data.id});
}
  return (
    <div className={styles.cartwrapper} ref={cartRef}>
        <div className={styles.cartcontainer}>
            <button
                type='button'
                className={styles.cartheading}
                onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                <span className={styles.heading}>Your Cart</span>
                <span className={styles.cartnumitems}>({totalQuantities} items)</span>
            </button>

            {cartItems.length < 1 && (
          <div className={styles.emptycart}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className={styles.btn}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className={styles.productcontainer}>
            {cartItems.length >= 1 && cartItems.map((item,index) => (
                <div className={styles.product} key={item._id}>
                    <img src={urlFor(item?.image[0])}
                    className={styles.cartproductimage}/>
                    <div className={''}>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                    </div>
                    <div className={styles.flexbottom}>
                  <div>
                  <p className={styles.quantitydesc}>
                    <span className={styles.minus} onClick={() => toggleCartitemQuantity(item._id,'dec')}>
                    <AiOutlineMinus />
                    </span>
                    <span className={styles.num} onClick="">{item.quantity}</span>
                    <span className={styles.plus} onClick={() => toggleCartitemQuantity(item._id,'inc')}><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className={styles.removeitem}
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline/>
                  </button>
                  </div>
                  </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles.cartbottom}>
            <div className={styles.total}>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className={styles.btncontainer}>
              <button type='button' className={styles.btn} onClick={handleCheckout}>Pay with Stripe</button>
            </div>
          </div>
        )}

        </div>
    </div>
  )
}

export default Cart;