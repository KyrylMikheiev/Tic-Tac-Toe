import Stats from "./Stats";
import PlayField from "./playField";
import { useState, useEffect } from "react";


export default function App() {

    const [isPressed, setIsPressed] = useState(true);
    const [gameOutcome, setGameOutcome] = useState("I will tell the outcome of each game!");
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState("X");

    function handleTileClick(index) {

      setPlayerTurn(playerTurn === "X" ? "O" : "X");
      if (tiles[index]) return;
      
      const newTiles = [...tiles];
      newTiles[index] = playerTurn;
      setTiles(newTiles);
    }

    const handleButtonClick = () => {
      setTiles(Array(9).fill(null));
        setGameOutcome("Game is running...");
        setIsPressed(true);

    };

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
                <Stats />
                <PlayField tiles={tiles} handleTileClick={handleTileClick}/>
                <label>{gameOutcome}</label>
                <button onClick={handleButtonClick}>Play Again</button>
            </div>
    )
}