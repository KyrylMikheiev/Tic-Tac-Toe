

export default function Tile({className, onClick, value}) {

    return (
        <div className={className} onClick={onClick}>{value}</div>
    )
}