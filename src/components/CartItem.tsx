import { data } from '../data/data';
import { useShoppingCart } from './context/CartContext';
import { CartItemType } from './types/type';

export const CartItem = ({ id, quantity }: CartItemType) => {
  const { increaseQuantity, decreaseQuantity } = useShoppingCart();
  const item = data.find((x) => x.id === id);
  if (item == null) return null;
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <span>{quantity}</span>
      <form>
        <button type="button" onClick={() => increaseQuantity(id)}>
          {' '}
          +{' '}
        </button>{' '}
        <button type="button" onClick={() => decreaseQuantity(id)}>
          {' '}
          -{' '}
        </button>
      </form>
    </div>
  );
};
