import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/footer.module.sass'

const Footer = ({ businessName }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
    
      &copy; {businessName} - All rights reserved.

    </div>
  </div>
)

export default Footer
