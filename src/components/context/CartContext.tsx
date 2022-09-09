import { createContext, useContext, useState } from 'react';
import { CartItemType } from '../types/type';

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  checkIfItemExists: (id: string) => boolean;
  cartItems: CartItemType[];
};

const CartContext = createContext({} as CartContextType);

export function useShoppingCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  function increaseQuantity(id: string) {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    });
  }

  function decreaseQuantity(id: string) {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id)?.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      }
    });
  }

  function removeItem(id: string) {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function checkIfItemExists(id: string) {
    return cartItems.some((item) => item.id === id);
  }
  return (
    <CartContext.Provider
      value={{
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        cartItems,
        checkIfItemExists,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
