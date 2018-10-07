import React from 'react'
import HeaderLink from './buttons/HeaderLink'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.headerWrapper}>
    <div className={styles.headerCore}>
      <div>
        <h3 style={{ margin: 0 }}>
          <HeaderLink to="/" title="glaadiss" />
        </h3>
      </div>
      <div className={styles.headerLinks}>
        <HeaderLink to="/" title="About me" />
        <HeaderLink to="/" title="Blog" />
        <HeaderLink to="/" title="Contact" />
      </div>
    </div>
  </div>
)

export default Header
