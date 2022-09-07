import styles from '../styles/footer.module.css';
import utils from '../styles/utils.module.css';

export const Footer = () => {
  return (
    <section className={`${utils.container} ${styles.footer_container}`}>
      <div className={styles.footer_item}>
        <h2>Gaming</h2>
        <ul>
          <li>Nintendo Switch</li>
          <li>Playstation Series</li>
          <li>Xbox</li>
          <li>PC/Mac</li>
        </ul>
      </div>
      <div className={styles.footer_item}>
        <h2>Other Offers</h2>
        <ul>
          <li>Pre-orders</li>
          <li>Rewards</li>
          <li>Collectibles</li>
          <li>More Essentials</li>
        </ul>
      </div>
      <div className={styles.footer_item}>
        <h2>Customer Service</h2>
        <ul>
          <li>Return and Exchange</li>
          <li>Order Cancellation</li>
          <li>Product Warranty</li>
          <li>More Essentials</li>
        </ul>
      </div>
    </section>
  );
};
