import { CartItem } from '../components/CartItem';
import { useShoppingCart } from '../components/context/CartContext';
import utils from '../styles/utils.module.css';
import { data } from '../data/data';
import { ShopItem } from '../components/types/type';
export const Cart = (): JSX.Element => {
  const { cartItems } = useShoppingCart();

  function getSubtotal() {
    let total = 0;
    if (!cartItems) return total;
    const items = cartItems.map((a) => {
      let obj = data.find((x) => x.id === a.id);
      return { ...obj, quantity: a.quantity } as ShopItem;
    });

    for (let item of items) {
      total = total + item.quantity * item.price;
    }
    return total;
  }

  return (
    <div className={utils.container}>
      <h1>Your Shopping Cart</h1>
      <p>Number of Items: {cartItems.length}</p>
      <p>Subtotal: {getSubtotal()}</p>
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
