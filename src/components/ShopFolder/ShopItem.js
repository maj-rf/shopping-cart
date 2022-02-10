import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: rgba(255, 7, 58);
  padding: 5px;
  border-radius: 20px;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-5px);
  }
`;
const AddButton = styled(AiFillPlusCircle)`
  color: white;
  cursor: pointer;
  transform: scale(1.5);
  &:hover {
    color: black;
  }
`;
const MinusButton = styled(AiFillMinusCircle)`
  color: white;
  cursor: pointer;
  transform: scale(1.5);
  &:hover {
    color: black;
  }
`;
const AddToCart = styled.button`
  max-width: 150px;
  margin: 0 auto;
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 5px;
  border: 3px solid #494949;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #494949;
    border-color: #ffffff;
    transition: all 0.4s ease 0s;
  }
`;
const StyledInput = styled.input`
  width: 75px;
`;
const ShopItem = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity((prevState) => (prevState = parseInt(e.target.value)));
    e.preventDefault();
  };

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

  let name = props.game.name;
  let image = props.game.image;
  let price = props.game.price;

  return (
    <StyledItem>
      <img src={props.game.image} alt={props.game.name}></img>
      <p>{props.game.name}</p>
      <p>${props.game.price}</p>
      <div>
        <AddButton onClick={increment}></AddButton>{' '}
        <StyledInput
          onChange={handleChange}
          type="number"
          value={quantity}
        ></StyledInput>{' '}
        <MinusButton onClick={decrement}> - </MinusButton>
      </div>
      <AddToCart onClick={() => props.addItem(image, name, price, quantity)}>
        {' '}
        Add To Cart{' '}
      </AddToCart>
    </StyledItem>
  );
};

export default ShopItem;
