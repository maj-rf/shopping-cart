import { ShopItem } from './types/type';
import styles from '../styles/item.module.css';
import utils from '../styles/utils.module.css';
import { useShoppingCart } from './context/CartContext';

export const Item = ({ name, id, image, price }: ShopItem): JSX.Element => {
  const { increaseQuantity, removeItem, checkIfItemExists } = useShoppingCart();

  return (
    <div className={styles.item_container}>
      <div className={styles.img_container}>
        <img className={styles.item_img} src={image} alt={name} />
      </div>
      <div className={styles.details}>
        <p>{name}</p>
        <span>${price}</span>
      </div>
      {checkIfItemExists(id) ? (
        <button
          className={`${utils.common_btn} ${utils.remove}`}
          onClick={() => removeItem(id)}
        >
          {' '}
          Remove from Cart{' '}
        </button>
      ) : (
        <button
          className={`${utils.common_btn} ${utils.add}`}
          onClick={() => increaseQuantity(id)}
        >
          {' '}
          + Add To Cart{' '}
        </button>
      )}
    </div>
  );
};
