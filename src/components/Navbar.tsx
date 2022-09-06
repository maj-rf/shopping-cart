import { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { NaviLink } from './NaviLink';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const changeVisibility = (): void => {
    setShowLinks((prev) => !prev);
  };

  const hide = (): void => {
    setShowLinks(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>SWITCHER</div>
        <div className={styles.burger}>
          <button onClick={changeVisibility}> [=] </button>
        </div>
        <ul
          className={`${styles.links} ${
            showLinks ? styles.showLinks : styles.hideLinks
          }`}
        >
          <NaviLink path="/" hide={hide} name="Home" />
          {/* <NavLink
              to="/"
              onClick={changeVisibility}
              style={({ isActive }): any =>
                isActive ? activeStyle : undefined
              }
            >
              Home
            </NavLink> */}
          <NaviLink path="/shop" hide={hide} name="Shop" />
          <NaviLink path="/cart" hide={hide} name="Cart" />
        </ul>
      </nav>
    </header>
  );
};
