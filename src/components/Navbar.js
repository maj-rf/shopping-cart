import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//---------Styled Components----------------//
const LinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
`;
const StyledLink = styled(Link)`
  height: auto;
  padding: 3vh;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
  :hover,
  &:active {
    background: #fff;
    color: black;
  }
`;
const Logo = styled.div`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
  font-size: 30px;
  font-weight: 700;
`;
const BurgerMenu = styled.div`
  display: none;
`;
const BurgerLines = styled.div`
  width: 25px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  font-size: 15px;
  min-height: 8vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    ${LinksWrapper} {
      display: block;
      position: absolute;
      top: 68px;
      right: 0;
      height: auto;
      background: #333;
    }
    ${StyledLink} {
      display: block;
    }
    ${BurgerMenu} {
      position: relative;
      display: block;
    }
  }
`;
//----------End of Styled Components--------------//
export default function Navbar(props) {
  return (
    <Nav>
      <Logo>Switcher</Logo>
      <LinksWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
      </LinksWrapper>
      <StyledLink to="/cart">Cart ({props.orderNumber})</StyledLink>
      <BurgerMenu>
        <BurgerLines></BurgerLines>
        <BurgerLines></BurgerLines>
        <BurgerLines></BurgerLines>
      </BurgerMenu>
    </Nav>
  );
}
