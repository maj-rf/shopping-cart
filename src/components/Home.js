import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../helpers/data';
import shuffle from '../helpers/shuffle';
import headerImg from '../assets/switcheader.jpg';
//---------------Styled Components-----------------//
const HomeWrapper = styled.div`
  background: #fff;
  margin: auto;
  /* max-width: 1300px; */
  padding-left: 25px;
  padding-right: 25px;
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
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: #343435;
  padding: 5px;
  border-radius: 20px;
  transition: transform 0.5s;
  color: #fff;
  font-weight: 500;

  &:hover {
    transform: translateY(-5px);
  }
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const StyledColumn = styled.div`
  flex-basis: 50%;
  min-width: 300px;
  img {
    max-width: 100%;
    padding: 50px 0;
  }
`;
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* ${ListItem}:nth-child(odd) {
    background: red;
  } */
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const Styledh1 = styled.h1`
  font-size: 40px;
  line-height: 100px;
  text-align: ${(props) => (props.header ? 'left' : 'inherit')};
  color: ${(props) => (props.header ? '#fff' : 'inherit')};
  position: relative;

  &::after {
    content: '';
    background: #fff;
    width: 300px;
    height: 7px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    margin: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
    margin: 10px;
    line-height: 50px;
  }
`;
const StyledP = styled.p`
  text-align: left;
`;

//---------End of Styled Components----------------//

export default function Home() {
  const [featuredGame] = useState(shuffle([...data])); //randomize Featured game
  return (
    <HomeWrapper>
      <StyledRow>
        <StyledColumn>
          <Styledh1 header>Toss a coin to your Switcher!</Styledh1>
          <StyledP>
            {' '}
            Switcher is your one-stop online Shop dedicated for Nintendo Switch
            Products. Be up-to-date with the latest Switch games. Pick, Add to
            Cart, and products will be delivered <strike>magically</strike> at
            your doorsteps. <strong>Get Switched!</strong>
          </StyledP>
        </StyledColumn>
        <StyledColumn>
          <img src={headerImg} alt="Switch Img"></img>
        </StyledColumn>
      </StyledRow>
      <div>
        <Styledh1>Featured Items</Styledh1>
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
    </HomeWrapper>
  );
}
