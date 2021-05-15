import React from 'react';
import styled from 'styled-components';

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

const CartItem = (props) => {
  return (
    <StyledCartItem>
      <img src={props.item.image} alt={props.item.name}></img>
      <div>
        <p>{props.item.name}</p>
        <p>${props.item.price}</p>
        <p>Quantity: {props.item.quantity}</p>
        <p>Total: ${(props.item.quantity * props.item.price).toFixed(2)}</p>
        <button onClick={() => props.removeItem(props.item.name)}>
          Remove
        </button>
      </div>
      {/* <div>
  <button onClick={increment}> + </button> {quantity}{' '}
  <button onClick={decrement}> - </button>
  </div> */}
    </StyledCartItem>
  );
};

export default CartItem;
