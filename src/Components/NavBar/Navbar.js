import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
          </div>
          <div className={styles.items}>
            <button className={styles.sair}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
