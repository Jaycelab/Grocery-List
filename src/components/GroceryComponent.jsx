import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItemComponent from "./GroceryItemComponent";

const GroceryComponent = () => {
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddItem = () => {
    setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
  };

  const handleEditItem = (id, newItem) => {
    const updatedGroceryItems = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, name: newItem };
      }

      return item;
    });
    //useState is updated with the updatedGroceryItems array
    setGroceryItems(updatedGroceryItems);
  };

  return (
    <div className="grocery-container">
      <h1>Grocery Shopping List</h1>
      <div className="input-section">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter an item..."
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button onClick={handleAddItem} className="btn-add">
            Add Item
          </button>
        </div>
      </div>
      <ul className="grocery-list">
        {groceryItems.map((item) => (
          <GroceryItemComponent
            key={item.id}
            item={item}
            handleEditItem={handleEditItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default GroceryComponent;
