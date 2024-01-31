import { useState } from "react";

function Player({ defaultName, symbol, active, setPlayer }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(defaultName);

    function clickHandler() {
        setEditing(editing => !editing);
        if (editing) {
            setPlayer(symbol, name);
        }
    }

    function editingHandler(event) {
        setName(event.target.value);

    }

    return <li className={active ? "active" : null}>
        <span className="player">
            {!editing
                ? <span className="player-name">{name}</span>
                : <input type="text" required value={name} onChange={editingHandler}></input>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{!editing ? "Edit" : "Save"}</button>
    </li>;
}
export default Player;