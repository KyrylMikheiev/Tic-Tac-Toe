import Stats from "./Stats";
import PlayField from "./playField";
import { useState, useEffect } from "react";


export default function App() {

    const [isPressed, setIsPressed] = useState(true);
    const [gameOutcome, setGameOutcome] = useState("I will tell the outcome of each game!");
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState("X");
    const [startSign, setStartSign] = useState(true);
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [wins, setWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [looses, setLooses] = useState(0);


    function handleTileClick(index) {
      if (tiles[index]) return;
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
      const newTiles = [...tiles];
      newTiles[index] = playerTurn;
      setTiles(newTiles);
    }

    const handleButtonClick = () => {
      if (tiles.every((tile) => tile === null)) {
        return;
      }
      setStartSign(!startSign);
      setPlayerTurn(startSign ? "X" : "O");
      setIsGameRunning(true);
      setTiles(Array(9).fill(null));
        setGameOutcome("Game is running...");
        setIsPressed(true);

    };

    useEffect(() => {
      if (tiles[0] === tiles[1] && tiles[1] === tiles[2] && tiles[0] !== null) {
        setGameOutcome(`Player ${tiles[0]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[3] === tiles[4] && tiles[4] === tiles[5] && tiles[3] !== null) {
        setGameOutcome(`Player ${tiles[3]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[6] === tiles[7] && tiles[7] === tiles[8] && tiles[6] !== null) {
        setGameOutcome(`Player ${tiles[6]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[0] === tiles[3] && tiles[3] === tiles[6] && tiles[0] !== null) {
        setGameOutcome(`Player ${tiles[0]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[1] === tiles[4] && tiles[4] === tiles[7] && tiles[1] !== null) {
        setGameOutcome(`Player ${tiles[1]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[2] === tiles[5] && tiles[5] === tiles[8] && tiles[2] !== null) {
        setGameOutcome(`Player ${tiles[2]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[0] === tiles[4] && tiles[4] === tiles[8] && tiles[0] !== null) {
        setGameOutcome(`Player ${tiles[0]} wins!`);
        setIsGameRunning(false);
      } else if (tiles[2] === tiles[4] && tiles[4] === tiles[6] && tiles[2] !== null) {
        setGameOutcome(`Player ${tiles[2]} wins!`);
        setIsGameRunning(false);
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
                <label>{gameOutcome}</label>
                <button className="playAgain" onClick={handleButtonClick}>Play Again</button>
            </div>
    )
}