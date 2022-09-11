import { useState } from 'react';
import styles from '../../styles/navbar.module.css';
import { useShoppingCart } from '../context/CartContext';
import { NaviLink } from './NaviLink';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const changeVisibility = (): void => {
    setShowLinks((prev) => !prev);
  };

  const hide = (): void => {
    setShowLinks(false);
  };

  const { cartItems } = useShoppingCart();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>SWITCHER</div>
        <div className={styles.burger}>
          <button className={styles.menu_btn} onClick={changeVisibility}>
            {' '}
            {showLinks ? <HiOutlineX /> : <HiMenu />}{' '}
            <p className={styles.cart_num}>{cartItems.length}</p>
          </button>
          {/* <span>{cartItems.length}</span> */}
        </div>
        <ul
          className={`${styles.links} ${
            showLinks ? styles.showLinks : styles.hideLinks
          }`}
        >
          <NaviLink path="/" hide={hide} name="Home" />
          <NaviLink path="/shop" hide={hide} name="Shop" />
          <NaviLink
            path="/cart"
            hide={hide}
            name="Cart"
            cartItems={cartItems.length}
          />
        </ul>
      </nav>
    </header>
  );
};
