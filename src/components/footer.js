import React from 'react'
import { Link } from 'gatsby'
import roundel from '../images/assets/roundel.svg'

import styles from '../css/footer.module.sass'

const Footer = ({ businessName }) => (
  <footer className={styles['container']}>
    <div className={styles['wrapper']}>
      <div className={styles['wrapper-grid-4']}>
        <div className={styles['grid-item']}>
          <h5>Shop</h5>
          <ul>
            <li><Link to="/apparel" className={styles.link}>Apparel</Link></li>
            <li><Link to="/leatherwear" className={styles.link}>Leatherwear</Link></li>
            <li><Link to="/adornments" className={styles.link}>Adornments</Link></li>
          </ul>
          <h5>Find Us</h5>
          <ul>
            <li><Link to="" className={styles.link}><span></span>Facebook</Link></li>
            <li><Link to="" className={styles.link}><span></span>Twitter</Link></li>
            <li><Link to="" className={styles.link}><span></span>Instagram</Link></li>
          </ul>
        </div>

        <ul className={styles['grid-item']}>
          <h5>At Your Service</h5>
          <ul>
            <li><Link to="" className={styles.link}>Collections</Link></li>
            <li><Link to="" className={styles.link}>All Products</Link></li>
            <li><Link to="" className={styles.link}>Contact</Link></li>
            <li><Link to="" className={styles.link}>FAQs</Link></li>
            <li><Link to="" className={styles.link}>Shipping, Returns &amp; Refunds</Link></li>
            <li><Link to="" className={styles.link}>Terms &amp; Conditions</Link></li>
            <li><Link to="" className={styles.link}>Privacy Notice</Link></li>
            <li><Link to="" className={styles.link}>Care Guide</Link></li>
            <li><Link to="" className={styles.link}>Wish List</Link></li>
            <li><Link to="" className={styles.link}>Measuring Guide</Link></li>
          </ul>
        </ul>

        <div className={styles['grid-item']}>
          <h5>Sign up to the newsletter</h5>
          <p>Receive updates on our latest collections, events and initiatives.</p>
          <input type="checkbox" name="emailTerms" value=""></input>
          <input type="text" name="emailAddress" value=""></input>
        </div>

        <div className={styles['grid-item']}>
          <img src={roundel} alt=""/>
        </div>
      </div>

      <div className={styles.copyright}>&copy; {businessName} - All rights reserved.</div>
    </div>
  </footer>
)

export default Footer
