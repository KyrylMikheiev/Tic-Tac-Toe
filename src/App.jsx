import Stats from "./Stats";
import PlayField from "./playField";
import { useState, useEffect } from "react";


export default function App() {

    const [isPressed, setIsPressed] = useState(true);
    const [gameOutcome, setGameOutcome] = useState("I will tell the outcome of each game!");
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [move, setMove] = useState("X");
    const [playerMove, setPlayerMove] = useState("X");
    const [isGameRunning, setIsGameRunning] = useState(true);

    const [wins, setWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [looses, setLooses] = useState(0);


    function handleTileClick(index) {
      if (tiles[index]) return;
      setMove(move === "X" ? "O" : "X");
      const newTiles = [...tiles];
      newTiles[index] = move;
      setTiles(newTiles);
    }

    function endGame(sign) {
      if (sign === playerMove) {
        setGameOutcome("You won!");
        setWins(wins + 1);
      } else {
        setGameOutcome("You lost!");
        setLooses(looses + 1);
      }
      setIsGameRunning(false);
    }

    const handleButtonClick = () => {
      if (tiles.every((tile) => tile === null)) {
        return;
      }
      setPlayerMove(playerMove === "X" ? "O" : "X");
      setGameOutcome("Game is running ...")
      setMove("X");
      setIsGameRunning(true);
      setTiles(Array(9).fill(null));
      setIsPressed(true);

    };

    useEffect(() => {
      if (tiles[0] === tiles[1] && tiles[1] === tiles[2] && tiles[0] !== null) {
        endGame(tiles[0]);
      } else if (tiles[3] === tiles[4] && tiles[4] === tiles[5] && tiles[3] !== null) {
        endGame(tiles[3]);
      } else if (tiles[6] === tiles[7] && tiles[7] === tiles[8] && tiles[6] !== null) {
        endGame(tiles[6]);
      } else if (tiles[0] === tiles[3] && tiles[3] === tiles[6] && tiles[0] !== null) {
        endGame(tiles[0]);
      } else if (tiles[1] === tiles[4] && tiles[4] === tiles[7] && tiles[1] !== null) {
        endGame(tiles[1]);
      } else if (tiles[2] === tiles[5] && tiles[5] === tiles[8] && tiles[2] !== null) {
        endGame(tiles[2]);
      } else if (tiles[0] === tiles[4] && tiles[4] === tiles[8] && tiles[0] !== null) {
        endGame(tiles[0]);
      } else if (tiles[2] === tiles[4] && tiles[4] === tiles[6] && tiles[2] !== null) {
        endGame(tiles[2]);
      } else if (tiles.every((tile) => tile !== null)) {
        setGameOutcome("It's a draw!");
        setIsGameRunning(false);
        setDraws(draws + 1);
      }
    }, [tiles]);



    useEffect(() => {
        if (isPressed) {
          setTimeout(() => {
            setIsPressed(false);
          }, 1000); // Adjust the duration based on your CSS animation
        }
      }, [isPressed]);
    

    return (
            <div className="app">
                <h1 className={`header ${isPressed ? 'bounceText' : ''}`}>TicTacToe</h1>
                <Stats wins={wins} draws={draws} looses={looses}/>
                <PlayField tiles={tiles} handleTileClick={handleTileClick} disabled={!isGameRunning}/>
                <label className="playerMove">You play with {playerMove}</label>
                <label className="gameOutcome">{gameOutcome}</label>
                <button className="playAgain" onClick={handleButtonClick}>Play Again</button>
            </div>
    )
}