import { CartItemType, ShopItem } from '../types/type';
import { data } from '../../data/data';

export function getSubtotal(cartItems: CartItemType[]) {
  let total = 0;
  if (!cartItems) return total;
  const items = cartItems.map((a) => {
    let obj = data.find((x) => x.id === a.id);
    return { ...obj, quantity: a.quantity } as ShopItem;
  });

  for (let item of items) {
    total = total + item.quantity * item.price;
  }
  return Math.round(total * 100) / 100;
}
