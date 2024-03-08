

export default function Tile({className, onClick, value, disabled}) {

    return (
        <button className={`tile ${className}`} onClick={onClick} disabled={disabled}>{value}</button>
    )
}