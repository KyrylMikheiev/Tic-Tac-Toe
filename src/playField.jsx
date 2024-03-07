import { useState } from "react";


export default function PlayField() {

    const [availableCells, setAvailableCells] = useState(Array(9).fill(true));


    return (
            <div className="playField"> 
                <div className="div1"></div>
                <div className="div2"></div>
                <div className="div3"></div>
                <div className="div4"></div>
                <div className="div5"></div>
                <div className="div6"></div>
                <div className="div7"></div>
                <div className="div8"></div>
                <div className="div9"></div>
            </div>
    )
}