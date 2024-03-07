

export default function Tile({className, onClick, value}) {

    return (
        <div className={`tile ${className}`} onClick={onClick}>{value}</div>
    )
}