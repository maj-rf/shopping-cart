import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
type NavProps = {
  path: string;
  hide: () => void;
  name: string;
};

export const NaviLink = ({ path, hide, name }: NavProps) => {
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
        {name}
      </NavLink>
    </li>
  );
};
