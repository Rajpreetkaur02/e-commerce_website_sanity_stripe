import React from 'react'
import Link from 'next/link';
import styles from '../styles/home.module.css'
import { BiSun, BiWater, BiWind } from "react-icons/bi";
import Footer from './footer';
import Navbar from './navbar';


const home = () => {
  return (
    <div>
    <div className={styles.hero}>
      <Navbar/>
      <div className={styles.main}>
        <div className={styles.left}>
          <span id={styles.mainText}>Let the environment be green<img src='/images/plant.png' id={styles.maintextimg}/></span>
          <div className={styles.desc}><span id={styles.starting}>Starting from <span id={styles.price}>Rs. 300</span></span><p id={styles.desctext}>These succulents are ideal for use in your home because they can tolerate indoor conditions.</p></div>
          <Link href="/shop">
            <div><button id={styles.mainbutton}>Buy Now</button></div>
          </Link>
        </div>
        <div className={styles.center}>
          <div className={styles.circle}></div>
          <img id={styles.mainimg} src='/images/mainplant.png'/>
        </div>
        <div className={styles.right}>
          <div className={styles.mainbox}><span id={styles.boxmaintext}><BiSun className={styles.orangeicon}/>Sunlight</span><span id={styles.boxtext}>4 to 5 hours</span></div>
          <div className={styles.mainbox}><span id={styles.boxmaintext}><BiWind className={styles.orangeicon}/>Humidity</span><span id={styles.boxtext}>86%</span></div>
          <div className={styles.mainbox}><span id={styles.boxmaintext}><BiWater className={styles.orangeicon}/>watering</span><span id={styles.boxtext}>1 in 7 days</span></div>
        </div>
      </div>
    </div>
    <div className={styles.myproducts}>
        <div className={styles.myproductcards}>
          <img src='/images/plants1.jpg'></img>
          <span className={styles.cardtext1}>LIMITED EDITION</span>
          <span className={styles.cardtext2}>Give a gift that grows</span>
          <Link href="/shop">
            <button className={styles.cardbutton}>SHOP NOW</button>
          </Link>
          
        </div>
        <div className={styles.myproductcards}>
          <img src='/images/plants3.jpg'></img>
          <span className={styles.cardtext2} id={styles.darkimgtext}>Hot Deals</span>
          <span className={styles.cardtext1} id={styles.darkimgtext}>Don't miss today's featured deals</span>
          <Link href="/shop">
            <button className={styles.cardbutton}>SHOP NOW</button>
          </Link>
          
        </div>
        <div className={styles.myproductcards}>
          <img src='/images/plants2.jpg'></img>
          <span className={styles.cardtext1}>EXCLUSIVE COLLECTION</span>
          <span className={styles.cardtext2}>limited Time Deals</span>
          <Link href="/shop">
            <button className={styles.cardbutton}>SHOP NOW</button>
          </Link>
          
        </div>
    </div>
    <div className={styles.collections}>
      <div className={styles.collectiontext}>
        <span id={styles.coll1}>Plants collections</span>
        <span id={styles.coll2}>Sets for all homes. Find your match.</span>
        <Link href="/shop">
            <span id={styles.coll3}>EXPLORE COLLECTIONS</span>
        </Link>
      </div>
      <div className={styles.live}>
        <img src='/images/live.jpg' id={styles.collimg}></img>
      </div>
      <div className={styles.trend}>
        <img src='/images/trend.jpg' id={styles.collimg}></img>
      </div>
    </div>
    <img src='/images/eco.jpg' id={styles.ecoimg}></img>
    <div className={styles.eco}>
        <span id={styles.ecotext1}>ECO-FRIENDLY</span>
        <span id={styles.ecotext2}>We believe in the power of plants.</span>
        <span id={styles.ecotext3}>Get up to 20% off on new Arrivals</span>
        <Link href="/shop">
          <button id={styles.ecobutton}>SHOP NOW</button>
        </Link>
        
    </div>
    <Footer/>
    </div>
    // <div className={styles.hero}>
    //   <div className={styles.navbar}>
    //     <img src='/images/logo.png' className={styles.logo}/>
    //     <Link href="/shop">
    //       <button type='button' className={styles.button}>Shop</button>
    //     </Link>
        
    //   </div>
    //   <div className={styles.content}>
    //   <div className={styles.quote}>
    //                 <div className={styles.sliding}></div>
    //                 <span>the wildlife and it's habitat cannot speak, so we must and we will</span>
    //             </div> 

    //             <div className={styles.hometext}>
    //                 <ul className={styles.dynamictext}>
    //                     <li><span id='gift'>Buy a gift!</span></li>
    //                     <li><span id='vol'>cool graphic t-shirts</span></li>
    //                     <li><span id='blog'>more coming soon</span></li>
    //                     <li><span id='aware'>spread awareness</span></li>
    //                 </ul>
    //             </div>
    //             <div className={styles.statictext}>
    //                 <p>The revenue generated from this business goes straight to the NGO's working towards the wildlife conservation</p>
    //                 <p>If you are a wildlife lover like us, buy a cool t-shirt for yourself and a life for a wildlife buddy! </p>
    //                 <Link href="/shop">
    //                   <button type='button' className={styles.mainbutton}>Shop now</button>
    //                 </Link>
    //             </div>          
    //   </div>
    //   <div className={styles.sidebar}>
    //     <img src='/images/menu.png' className={styles.menu}/>

    //     <div className={styles.socialLinks}>
    //       <img src='/images/fb.png' />
    //       <img src='/images/ig.png' />
    //       <img src='/images/tw.png' />
    //     </div>
    //     <div className={styles.usefulLinks}>
    //       <img src='/images/share.png'/>
    //       <img src='/images/info.png'/>
    //     </div>
    //   </div>
      
    // </div>
  )
}

export default home