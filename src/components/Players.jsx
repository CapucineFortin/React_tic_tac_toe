import Player from "./Player";

function Players({ logs, players, setPlayers }) {
    const turn = logs.length % 2 == 0 ? 'X' : 'O';
    return <ol id="players" className="highlight-player">
        <Player defaultName={players.X} symbol='X' active={turn === 'X'} setPlayer={setPlayers} />
        <Player defaultName={players.O} symbol='O' active={turn === 'O'} setPlayer={setPlayers} />
    </ol>;
}
export default Players;