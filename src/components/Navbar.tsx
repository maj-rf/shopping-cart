import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>SWITCHER</div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={styles.link}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
