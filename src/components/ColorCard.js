import React from "react";

function ColorCard({
  name,
  isLight,
  lightClass,
  darkClass,
  changeTone,
  deleteColor
}) {
  const colorClassName = isLight ? lightClass : darkClass;
  const colorTone = isLight ? "light" : "dark";
  return (
    <div onClick={changeTone} className={`color-card ${colorClassName}`}>
      <h2>{name}</h2>
      <p>{colorTone}</p>
      {/* debajo de esta línea agrega un botón con la clase "delete-color" */}
      <button className="delete-color" onClick={deleteColor}>
        X
      </button>
    </div>
  );
}

export default ColorCard;
