import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1 className="grocery-header">GROCERY CART</h1>
      <ul style={{listStyleType: "none"}}>
        {cart.map((item, index) => (
          <li style={{fontSize: "2em"}} onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="grocery-header2">Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2 className="grocery-header2">Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
      <footer>
        <p>Author: Andres R. Bucheli</p>
        <p>BUCHELI WEB DEVELOPMENT ©</p>
        <p><a href="mailto:radio_seattle@hotmail.com">radio_seattle@hotmail.com</a></p>
      </footer>
    </div>
  );
}
