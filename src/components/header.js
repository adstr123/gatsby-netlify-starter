import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/header.module.sass'

const Header = ({ businessName }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
    
      <div className={styles.nav}>
        <ul className={styles.nav__left}>
          <li><Link to="/apparel" className={styles.link}>Apparel</Link></li>
          <li><Link to="/leatherwear" className={styles.link}>Leatherwear</Link></li>
          <li><Link to="/adornments" className={styles.link}>Adornments</Link></li>
        </ul>
        <div className={styles.nav__center}>
          <h1 className={styles.name__cont}>
            <Link to="/" className={styles.name__link}>{businessName}</Link>
          </h1>
        </div>
        <div className={styles.nav__right}>
          <Link to="/" className={styles.link}>Blog</Link>
          <Link to="/" className={styles.link}>Our Story</Link>
          <Link to="/" className={styles.link}>Search</Link>
          <Link to="/" className={styles.link}>Profile</Link>
          <Link to="/" className={styles.link}>Cart</Link>
        </div>
      </div>

    </div>
  </div>
)

export default Header
