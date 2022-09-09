import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
type NavProps = {
  path: string;
  hide: () => void;
  name: string;
  cartItems?: number;
};

export const NaviLink = ({ path, hide, name, cartItems }: NavProps) => {
  let activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <li className={styles.link}>
      <NavLink
        to={path}
        onClick={hide}
        style={({ isActive }): any => (isActive ? activeStyle : undefined)}
      >
        {name} {cartItems}
      </NavLink>
    </li>
  );
};
