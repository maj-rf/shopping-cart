import React from 'react';
import data from '../helpers/data';

//---------------Styled Components-----------------//
//---------End of Styled Components----------------//
export default function Shop() {
  return (
    <div>
      <h1>This is the Shop page.</h1>
      <ul>
        {data.map((game) => {
          return (
            <li key={game.name}>
              <img src={game.image} alt={game.name}></img>
              {game.name}
              {game.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
