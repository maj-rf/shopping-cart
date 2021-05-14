import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../helpers/data';
import shuffle from '../helpers/shuffle';

//---------------Styled Components-----------------//
const HomeWrapper = styled.div`
  background: #fff;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: rgba(4, 217, 255);
  padding: 5px;
  border-radius: 20px;
`;

const Styledh1 = styled.h1`
  font-size: 30px;
`;

//---------End of Styled Components----------------//

export default function Home() {
  const [featuredGame] = useState(shuffle([...data])); //randomize Featured game
  return (
    <HomeWrapper>
      <header>
        <Styledh1>Toss a coin to your Switcher!</Styledh1>
        <p>
          {' '}
          Switcher is your one-stop online Shop for Nintendo Switch Products.
        </p>
        <div>
          <Styledh1 as="h2">Featured Items</Styledh1>
          <StyledList>
            {featuredGame.slice(0, 3).map((game) => {
              return (
                <ListItem key={game.name}>
                  <img src={game.image} alt={game.name}></img>
                  <p>{game.name}</p>
                  <p>${game.price}</p>
                </ListItem>
              );
            })}
          </StyledList>
        </div>
      </header>
    </HomeWrapper>
  );
}
