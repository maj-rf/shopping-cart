import React from 'react';
import styled from 'styled-components';

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  background: rgba(255, 7, 58);
  padding: 5px;
  width: 50vw;
  border: 3px dotted #fff;
  margin-top: 15px;
  min-width: 600px;
  @media only screen and (max-width: 800px) {
    min-width: 400px;
  }
`;

const StyledImg = styled.img`
  max-height: 300px;
  @media only screen and (max-width: 800px) {
    max-height: 200px;
  }
`;
const StyledP = styled.p`
  color: #f9f9f9;
  font-weight: 700;
`;
const StyledButton = styled.button`
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

const CartItem = (props) => {
  return (
    <StyledCartItem>
      <StyledImg src={props.item.image} alt={props.item.name}></StyledImg>
      <div>
        <StyledP>{props.item.name}</StyledP>
        <StyledP>Price: ${props.item.price}</StyledP>
        <StyledP>Quantity: {props.item.quantity}</StyledP>
        <StyledP>
          Total: ${(props.item.quantity * props.item.price).toFixed(2)}
        </StyledP>
        <StyledButton onClick={() => props.removeItem(props.item.name)}>
          Remove
        </StyledButton>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
