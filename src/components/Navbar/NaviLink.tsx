import { NavLink } from 'react-router-dom';
import styles from '../../styles/navbar.module.css';
import { HiShoppingCart } from 'react-icons/hi';
type NavProps = {
  path: string;
  hide: () => void;
  name: string;
  cartItems?: number;
};

export const NaviLink = ({ path, hide, name, cartItems }: NavProps) => {
  let activeStyle = {
    backgroundColor: '#2C3333',
  };

  return (
    <li className={styles.link}>
      <NavLink
        to={path}
        onClick={hide}
        style={({ isActive }): any => (isActive ? activeStyle : undefined)}
      >
        {name === 'Cart' ? (
          <div className={styles.cart_icon}>
            <HiShoppingCart size={20} /> <span>{cartItems}</span>
          </div>
        ) : (
          name
        )}
      </NavLink>
    </li>
  );
};
