import styles from './../style/MenuButton.module.scss';

export const MenuButton = ({ isActive, onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        className={`${styles.header__menu_button}
          ${isActive === true ? styles.active : ""}
          ${isActive === false ? styles.unactive : ""}
        `}>
        <span></span>
      </button>
    );
};
