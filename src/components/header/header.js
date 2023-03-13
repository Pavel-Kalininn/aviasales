import React from 'react';

import styles from './header.module.scss';
import logo from './Logo.png';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
