import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
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
    ${StyledLink}.hidden {
      display: none;
    }
    ${BurgerMenu} {
      position: relative;
      display: block;
      cursor: pointer;
    }
    ${BurgerLines}.hidden {
      background: #fff;
    }
    ${BurgerLines} {
      background: red;
    }
  }
`;
//----------End of Styled Components--------------//
export default function Navbar(props) {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <Nav>
      <Logo>Switcher</Logo>
      <LinksWrapper
        onMouseEnter={() => setShowLinks(true)}
        onMouseLeave={() => setShowLinks(false)}
      >
        <StyledLink className={showLinks ? '' : 'hidden'} to="/">
          Home
        </StyledLink>
        <StyledLink className={showLinks ? '' : 'hidden'} to="/shop">
          Shop
        </StyledLink>
      </LinksWrapper>
      <StyledLink to="/cart">
        <FaShoppingCart />({props.orderNumber})
      </StyledLink>
      <BurgerMenu onClick={() => setShowLinks((prevState) => !prevState)}>
        <BurgerLines className={showLinks ? '' : 'hidden'}></BurgerLines>
        <BurgerLines className={showLinks ? '' : 'hidden'}></BurgerLines>
        <BurgerLines className={showLinks ? '' : 'hidden'}></BurgerLines>
      </BurgerMenu>
    </Nav>
  );
}
