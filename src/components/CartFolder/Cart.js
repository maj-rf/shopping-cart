import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
const CartWrapper = styled.div`
  min-height: 800px;
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
const CartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #fff;
  margin-top: 300px;
`;
const TotalDiv = styled(CartMessage)`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  color: black;
`;
const StyledCartButton = styled.button`
  max-width: 150px;
  margin: 15px auto;
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
    background: ${(props) => (props.check ? 'red' : '#494949')};
    border-color: #ffffff;
    transition: all 0.4s ease 0s;
  }
`;

const Cart = (props) => {
  const getGrandTotal = (array) => {
    return array.reduce((a, b) => a + b.price * b.quantity, 0);
  };
  return (
    <CartWrapper>
      {props.cartList.length ? (
        <StyledCartList>
          {props.cartList.map((item) => {
            return (
              <CartItem
                item={item}
                key={item.name}
                removeItem={props.removeItem}
              />
            );
          })}
          <div>
            <StyledCartButton onClick={props.clearCart}>
              Clear Cart
            </StyledCartButton>
            <StyledCartButton
              check
              onClick={() =>
                alert('*cue Never Gonna Give You Up* You just got Rickrolled!')
              }
            >
              Check-Out
            </StyledCartButton>
          </div>
          <TotalDiv>Grand Total: ${getGrandTotal(props.cartList)}</TotalDiv>
        </StyledCartList>
      ) : (
        <StyledCartList>
          <CartMessage> There's nothing in your Cart yet. </CartMessage>
        </StyledCartList>
      )}
    </CartWrapper>
  );
};

export default Cart;
