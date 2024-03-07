import Stats from "./Stats";
import PlayField from "./playField";
import { useState, useEffect } from "react";


export default function App() {


    const [isPressed, setIsPressed] = useState(true);
      
    const handleButtonClick = () => {
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
                <PlayField/>
                <button onClick={handleButtonClick}>Play Again</button>
            </div>
    )
}