import { useState } from "react";

import Board from "./components/Board";
import Log from "./components/Log";
import Players from "./components/Players";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from './winning-combinations.js';


const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [logs, setLogs] = useState([]);
  const [players, setPlayers] = useState({ 'X': "Player 1", 'O': "Player 2" })

  const board = [...initialBoard].map(array => [...array]);

  for (const turn of logs) {
    board[turn.rowIndex][turn.colIndex] = turn.symbol;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const first = board[combination[0].row][combination[0].column];
    const second = board[combination[1].row][combination[1].column];
    const third = board[combination[2].row][combination[2].column]
    if (first && first === second && second === third) {
      winner = first;
    }
  };

  function turnHandler(rowIndex, colIndex) {
    const symbol = logs.length % 2 == 0 ? 'X' : 'O';
    setLogs(logs => [{ rowIndex: rowIndex, colIndex: colIndex, symbol: symbol }, ...logs]);
  }

  function replayHandler() {
    setLogs([]);
  }

  function playersHandler(symbol, name) {
    setPlayers(players => { return { ...players, [symbol]: name } });
  }

  return <main>
    <div id="game-container">
      <Players logs={logs} players={players} setPlayers={playersHandler} />
      {(logs.length == 9 || winner) && <GameOver winner={players[winner]} onReplay={replayHandler} />}
      <Board changeTurn={turnHandler} board={board} />
    </div>
    <Log logs={logs} />
  </main>;
}

export default App
