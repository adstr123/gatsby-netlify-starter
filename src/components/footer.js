import React from 'react'
import { Link } from 'gatsby'

import Col from '../components/col';

import styles from '../css/footer.module.sass'

const Footer = ({ businessName }) => (
  <footer className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.columnsWrapper}>
        <Col division="4">
          Hello
        </Col>
        <Col division="4">
        
        </Col>
        <Col division="4">
        
        </Col>
        <Col division="4">
        
        </Col>
      </div>

      <div className={styles.copyright}>&copy; {businessName} - All rights reserved.</div>
    </div>
  </footer>
)

export default Footer
