import { CartItem } from '../components/CartItem';
import { useShoppingCart } from '../components/context/CartContext';

export const Cart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      <h1>Cart</h1>
      <p>Number of Items: {cartItems.length}</p>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          );
        })}
      </div>
    </div>
  );
};
