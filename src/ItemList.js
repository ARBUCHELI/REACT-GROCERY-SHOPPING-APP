import React from "react";

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div className="buttonsList">
      {items.map((item, index) => (
        <button style={{padding: "5px", fontSize: "1.1em", marginLeft: "5px", marginRight: "5px", marginBottom: "5px", border: "solid", borderRadius: "5px", backgroundColor: "#DAA520", fontWeight: "bold"}}value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
