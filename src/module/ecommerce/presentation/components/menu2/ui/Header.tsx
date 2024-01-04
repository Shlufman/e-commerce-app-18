import { useState } from "react";

import styles from "./../style/style.module.scss";

export const Header = () => {
  const [isOpen,setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <span className={styles.header__logo}>Logo</span>
      <nav className={`${styles.header__nav} ${isOpen?"active":""}`}>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>Main</li>
          <li className={styles.header__nav_item}>About</li>
          <li className={styles.header__nav_item}>Address</li>
          <li className={styles.header__nav_item}>Contacts</li>
          <li className={styles.header__nav_item}>Login</li>
        </ul>
      </nav>
      <button className={styles.header__menu_button} onClick={()=>setOpen(prev=>!prev)}>
TTTT
      </button>
    </header>
  );
};
