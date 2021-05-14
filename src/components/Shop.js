import React from 'react';
import styled from 'styled-components';
import data from '../helpers/data';
import ShopItem from './ShopItem';
//---------------Styled Components-----------------//
const ShopWrapper = styled.div`
  background: #fff;
`;

const ShopList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

//---------End of Styled Components----------------//
export default function Shop() {
  return (
    <ShopWrapper>
      <h1>This is the Shop page.</h1>
      <ShopList>
        {data.map((game) => {
          return <ShopItem key={game.name} game={game} />;
        })}
      </ShopList>
    </ShopWrapper>
  );
}
