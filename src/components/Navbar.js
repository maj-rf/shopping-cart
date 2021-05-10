import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  font-size: 15px;
  min-height: 8vh;
`;

const Logo = styled.div`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
  font-size: 25px;
`;

const LinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
`;
const Link = styled.li`
  height: 100%;
  list-style: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #fff;
    color: black;
  }
`;
const BurgerLines = styled.div`
  width: 25px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
`;
export default function Navbar() {
  return (
    <Nav>
      <Logo>Switcher</Logo>
      <LinksWrapper>
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>Cart</Link>
      </LinksWrapper>
      <div>
        <BurgerLines></BurgerLines>
        <BurgerLines></BurgerLines>
        <BurgerLines></BurgerLines>
      </div>
    </Nav>
  );
}
