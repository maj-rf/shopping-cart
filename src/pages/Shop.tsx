import { data } from '../data/data';
import { Item } from '../components/Item';
import util_styles from '../styles/utils.module.css';
import styles from '../styles/shop.module.css';
export const Shop = () => {
  return (
    <div className={util_styles.container}>
      <h1>Shop</h1>
      <section className={styles.items}>
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </section>
    </div>
  );
};
