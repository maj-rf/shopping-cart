import React from 'react';
import styled from 'styled-components';

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  background: rgba(255, 7, 58);
  padding: 5px;
  border-radius: 20px;
  width: 50vw;
`;

const Cart = (props) => {
  return (
    <CartList>
      {props.cartItems.map((item) => {
        return (
          <StyledCartItem key={item.name}>
            <img src={item.image} alt={item.name}></img>
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            {/* <div>
        <button onClick={increment}> + </button> {quantity}{' '}
        <button onClick={decrement}> - </button>
      </div> */}
          </StyledCartItem>
        );
      })}
    </CartList>
  );
};

export default Cart;
