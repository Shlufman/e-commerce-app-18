import React from 'react'


import styles from './../style/Header.module.scss';

export default function Header({ className }) {
  const isOpen=false;




  return (
    <header className={`${styles.header} ${className}`}>
      <nav className={`${styles.header__nav} ${isOpen ? styles.active : ""}`} >
        <span className={styles.header__logo}>Logo</span>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>Main</li>
          <li className={styles.header__nav_item}>About</li>
          <li className={styles.header__nav_item}>Address</li>
          <li className={styles.header__nav_item}>Contacts</li>
          <li className={styles.header__nav_item}>Login</li>
        </ul>
      </nav>


    </header>
  )
}
{/* <span className={styles.header__logo}>Logo</span>
<nav className={`${styles.header__nav} ${isOpen ? styles.active : ""}`} ref={menuRef}>
  <ul className={styles.header__nav_list}>
    <li className={styles.header__nav_item}>Main</li>
    <li className={styles.header__nav_item}>About</li>
    <li className={styles.header__nav_item}>Address</li>
    <li className={styles.header__nav_item}>Contacts</li>
    <li className={styles.header__nav_item}>Login</li>
  </ul>
</nav>
<MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} /> */}