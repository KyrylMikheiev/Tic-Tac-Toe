


export default function Stats({wins, draws, looses}) {
    return (
            <div className="stats">
                <table>
                    <thead>
                        <tr>
                            <th>WINS</th>
                            <th>Draws</th>
                            <th>Looses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{wins}</td>
                            <td>{draws}</td>
                            <td>{looses}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}