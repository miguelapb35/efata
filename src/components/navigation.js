import React, { useState } from 'react'
import { Link } from 'gatsby'
import Efata from '../images/logos/logo-efata.png'
import menuItems from './navigation.data'
import WhatsappCall from '../components/whatsappCall'
import * as styles from './navigation.module.css'

const Navigation = () => {
  const [showmobile, setShowmobile] = useState(false)

  const showmobileMenu = () => {
    setShowmobile(!showmobile)
  }

  return (
    <div className={styles.navigationbar}>
      <nav role="navigation" className={styles.container} aria-label="Main">
        <div className={styles.mobileNavButton} onClick={showmobileMenu}>
          <span className={styles.mobileNavButtonLines} />
          <span className={styles.mobileNavButtonLines} />
          <span className={styles.mobileNavButtonLines} />
        </div>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logo} />
          <img src={Efata} alt="Logo Efata" className={styles.icon} />
        </Link>
        <div className={styles.menuLinks}>
          <ul className={styles.navigation}>
            {menuItems.map((menuItem, i) => (
              <li key={i} className={styles.navigationItem}>
                <Link to={menuItem.path}>{menuItem.label}</Link>
              </li>
            ))}
            <li className={styles.navigationItem}>
              <WhatsappCall />
            </li>
          </ul>
        </div>
      </nav>

      {showmobile ? (
        <div>
          <ul className={styles.mobileMenuLinks}>
            {menuItems.map((menuItem, i) => (
              <li key={i} className={styles.navigationItem}>
                <Link to={menuItem.path} onClick={showmobileMenu}>
                  {menuItem.label}
                </Link>
              </li>
            ))}
            <li className={styles.navigationItem}>
              <WhatsappCall className={styles.icon} />
            </li>
          </ul>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default Navigation
