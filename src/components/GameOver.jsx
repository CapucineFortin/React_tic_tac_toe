function GameOver({ winner, onReplay }) {
    return <div id="game-over">
        <h2>Game Over</h2>
        {!winner
            ? <p>It's a draw!</p>
            : <p>{winner} you won !</p>}
        <p><button onClick={onReplay}>Play again</button></p>
    </div>
}
export default GameOver;