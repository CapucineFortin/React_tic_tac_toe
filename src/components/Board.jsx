function Board({ changeTurn, board }) {
    return <ol id="game-board">
        {board.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((symbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => changeTurn(rowIndex, colIndex)} disabled={board[rowIndex][colIndex]}>{symbol}</button>
                        </li>
                    )}
                </ol>
            </li>)}
    </ol>;
}
export default Board;