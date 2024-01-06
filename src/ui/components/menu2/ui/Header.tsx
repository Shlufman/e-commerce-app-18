import { useRef, useState } from "react";

import { MenuButton } from "../components/MenuButton/ui/MenuButton";

import { useClickOutside } from "../../../../hooks/useClickOutside";

import styles from "./../style/Header.module.scss";


 const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 100);
  });


  return (
    <header className={styles.header}>
      <span className={styles.header__logo}>Logo</span>
      <nav className={`${styles.header__nav} ${isOpen ? styles.active : ""}`} ref={menuRef}>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>Main</li>
          <li className={styles.header__nav_item}>About</li>
          <li className={styles.header__nav_item}>Address</li>
          <li className={styles.header__nav_item}>Contacts</li>
          <li className={styles.header__nav_item}>Login</li>
        </ul>
      </nav>
      <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />

    </header>
  );
};
