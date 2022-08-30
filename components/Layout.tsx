import Header from './Header';
import styles from '../styles/layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
