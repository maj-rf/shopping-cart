import React from 'react';
import styled from 'styled-components';
import data from '../helpers/data';

//---------------Styled Components-----------------//
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

//---------End of Styled Components----------------//
export default function Shop() {
  return (
    <div>
      <h1>This is the Shop page.</h1>
      <StyledList>
        {data.map((game) => {
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
  );
}
