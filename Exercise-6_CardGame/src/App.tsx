import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Game, Guess } from './Game.class';
import { GameCard } from './GameCard';

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

const App = () => {
  const [game, setGame] = useState({ gameState: new Game() });

  function handleGuess(guess: Guess): void {
    setGame({ gameState: game.gameState.guess(guess) });
  }

  return (
    <>
      <GlobalStyle />
      <GameContainer>
        <GameCard card={game.gameState.currentCard} />
        <p>
          <button onClick={() => handleGuess({ isNextCardHigher: true })} disabled={game.gameState.gameOver}>Next card is HIGHER!</button>
          <button onClick={() => handleGuess({ isNextCardHigher: false })} disabled={game.gameState.gameOver}>Next card is LOWER!</button>
        </p>
        <CorrectGuessCount>{game.gameState.correctGuessCount} guessed correctly so far..</CorrectGuessCount>
        <IncorrectGuessCount>{game.gameState.incorrectGuessCount} guessed incorrectly so far..</IncorrectGuessCount>
        <Count>{game.gameState.correctGuessCount + game.gameState.incorrectGuessCount}/52 guessed in total</Count>
      </GameContainer>
    </>

  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
