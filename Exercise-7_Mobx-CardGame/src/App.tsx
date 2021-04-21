import styled, { createGlobalStyle } from 'styled-components';
import { Game } from './Game.class';
import { GameCard } from './GameCard';
import { observer } from "mobx-react";
import { autorun } from 'mobx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: lightgrey;
  }
`;

const GameContainer = styled.div`
  background-color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5vh;
  width: 40vw;
`;

const Count = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const CorrectGuessCount = styled(Count)`
  color: green;
`;
const IncorrectGuessCount = styled(Count)`
  color: red;
`;

const game = new Game();

autorun(() => {
  console.log(game.currentCard);
});

const App = () => (
    <>
      <GlobalStyle />
      <GameContainer>
        <GameCard card={game.currentCard} />
        <p>
          <button onClick={() => game.guess({ isNextCardHigher: true })} disabled={game.gameOver}>Next card is HIGHER!</button>
          <button onClick={() => game.guess({ isNextCardHigher: false })} disabled={game.gameOver}>Next card is LOWER!</button>
        </p>
        <CorrectGuessCount>{game.correctGuessCount} guessed correctly so far..</CorrectGuessCount>
        <IncorrectGuessCount>{game.incorrectGuessCount} guessed incorrectly so far..</IncorrectGuessCount>
        <Count>{game.correctGuessCount + game.incorrectGuessCount}/52 guessed in total</Count>
      </GameContainer>
    </>
);

export default observer(App);
