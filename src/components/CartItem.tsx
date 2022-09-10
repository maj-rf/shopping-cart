import { data } from '../data/data';
import { useShoppingCart } from './context/CartContext';
import { CartItemType } from './types/type';
import styles from '../styles/cartitem.module.css';
import utils from '../styles/utils.module.css';

export const CartItem = ({ id, quantity }: CartItemType) => {
  const { increaseQuantity, decreaseQuantity } = useShoppingCart();
  const item = data.find((x) => x.id === id);
  if (item == null) return null;
  return (
    <div className={styles.cart_item}>
      <img className={styles.item_img} src={item.image} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{quantity}</p>
        <p>${item.price}</p>
        <form>
          <button
            className={`${utils.common_btn} ${utils.add}`}
            type="button"
            onClick={() => increaseQuantity(id)}
          >
            {' '}
            +{' '}
          </button>{' '}
          <button
            className={`${utils.common_btn} ${utils.remove}`}
            type="button"
            onClick={() => decreaseQuantity(id)}
          >
            {' '}
            -{' '}
          </button>
        </form>
      </div>
    </div>
  );
};
