import React, { useState } from 'react';
import data from '../helpers/data';
import shuffle from '../helpers/shuffle';
//---------------Styled Components-----------------//
//---------End of Styled Components----------------//
export default function Home() {
  const [featuredGame] = useState(shuffle(data)); //randomize Feature game
  return (
    <div>
      <header>
        <h1>Toss a coin to your Switcher!</h1>
        <p>
          {' '}
          Switcher is your one-stop online Shop for Nintendo Switch Products.
        </p>
        <div>
          <h2>Featured Items</h2>
          <ul>
            {featuredGame.slice(0, 3).map((game) => {
              return (
                <li key={game.name}>
                  <img src={game.image} alt={game.name}></img>
                  <label>
                    {game.name}
                    {game.price}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}
