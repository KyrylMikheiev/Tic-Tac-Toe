import Tile from "./Tile";

export default function PlayField({tiles, handleTileClick, disabled}) {

    return (
            <div className="playField"> 
                <Tile className="tile0" onClick={() => handleTileClick(0)} value={tiles[0]} disabled={disabled}/>
                <Tile className="tile1" onClick={() => handleTileClick(1)} value={tiles[1]} disabled={disabled}/>
                <Tile className="tile2" onClick={() => handleTileClick(2)} value={tiles[2]} disabled={disabled}/>
                <Tile className="tile3" onClick={() => handleTileClick(3)} value={tiles[3]} disabled={disabled}/>
                <Tile className="tile4" onClick={() => handleTileClick(4)} value={tiles[4]} disabled={disabled}/>
                <Tile className="tile5" onClick={() => handleTileClick(5)} value={tiles[5]} disabled={disabled}/>
                <Tile className="tile6" onClick={() => handleTileClick(6)} value={tiles[6]} disabled={disabled}/>
                <Tile className="tile7" onClick={() => handleTileClick(7)} value={tiles[7]} disabled={disabled}/>
                <Tile className="tile8" onClick={() => handleTileClick(8)} value={tiles[8]} disabled={disabled}/>
            </div>
    )
}