import Tile from "./Tile";

export default function PlayField({tiles, handleTileClick}) {

    return (
            <div className="playField"> 
                <Tile className="tile0" onClick={() => handleTileClick(0)} value={tiles[0]}/>
                <Tile className="tile1" onClick={() => handleTileClick(1)} value={tiles[1]}/>
                <Tile className="tile2" onClick={() => handleTileClick(2)} value={tiles[2]}/>
                <Tile className="tile3" onClick={() => handleTileClick(3)} value={tiles[3]}/>
                <Tile className="tile4" onClick={() => handleTileClick(4)} value={tiles[4]}/>
                <Tile className="tile5" onClick={() => handleTileClick(5)} value={tiles[5]}/>
                <Tile className="tile6" onClick={() => handleTileClick(6)} value={tiles[6]}/>
                <Tile className="tile7" onClick={() => handleTileClick(7)} value={tiles[7]}/>
                <Tile className="tile8" onClick={() => handleTileClick(8)} value={tiles[8]}/>
            </div>
    )
}