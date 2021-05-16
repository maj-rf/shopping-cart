import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
const CartWrapper = styled.div`
  min-height: 600px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
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
    <CartWrapper>
      <StyledCartList>
        <button onClick={props.clearCart}>Clear Cart</button>
        <div>Grant Total: {getGrandTotal(props.cartList)}</div>
        {props.cartList.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.name}
              removeItem={props.removeItem}
            />
          );
        })}
      </StyledCartList>
    </CartWrapper>
  );
};

export default Cart;
