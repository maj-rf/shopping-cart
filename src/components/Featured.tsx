import styles from '../styles/feature.module.css';

export const Featured = () => {
  return (
    <section>
      <div className={`${styles.feature} ${styles.games}`}>
        <h1>Games</h1>
      </div>
      <div className={`${styles.feature} ${styles.acce}`}>
        <h1>Accessories</h1>
      </div>
    </section>
  );
};
