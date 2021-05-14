import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: rgba(255, 7, 58);
  padding: 5px;
  border-radius: 20px;
`;

const ShopItem = (props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const decrement = () => {
    setQuantity((prevState) => {
      return prevState ? prevState - 1 : 0;
    });
  };

  return (
    <StyledItem>
      <img src={props.game.image} alt={props.game.name}></img>
      <p>{props.game.name}</p>
      <p>${props.game.price}</p>
      <div>
        <button onClick={increment}> + </button> {quantity}{' '}
        <button onClick={decrement}> - </button>
      </div>
      <button> Add To Cart </button>
    </StyledItem>
  );
};

export default ShopItem;
