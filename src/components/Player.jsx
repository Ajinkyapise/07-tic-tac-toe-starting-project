import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEditButton() {
    if (isEditing) {
      onChangeName(symbol, name);
    }
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{btnCaption}</button>
    </li>
  );
}
