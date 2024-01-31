function Log({logs}){
    return <ol id="log">
        {logs.map(turn =><li>{turn.symbol} was played in [{turn.rowIndex}, {turn.colIndex}]</li>)}
    </ol>;
}
export default Log;
