import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Cart = (props) => {
  const getGrandTotal = (array) => {
    return array.reduce((a, b) => a + b.price * b.quantity, 0);
  };
  return (
    <StyledCartList>
      <button onClick={props.clearCart}>Clear Cart</button>
      <div>Grant Total: {getGrandTotal(props.cartList)}</div>
      {props.cartList.map((item) => {
        return (
          <CartItem item={item} key={item.name} removeItem={props.removeItem} />
        );
      })}
    </StyledCartList>
  );
};

export default Cart;
