import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItemComponent from "./GroceryItemComponent";

const GroceryComponent = () => {
  const inputRef = useRef();
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [errors, setErrors] = useState("");

  const handleAddItem = () => {
    //error check
    if (item) {
      setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
      setItem("");
      setErrors("");
    } else {
      setErrors("Please enter an item to add to the list.");
      inputRef.current.focus();
    }
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

  //clear grocery items IF only items are present
  const handleClearItems = () => {
    setGroceryItems([]);
  };

  //delete item
  const handleDeleteItem = (removeId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== removeId);
    setGroceryItems(filteredItems);
  };

  return (
    <div className="grocery-container">
      <h1>Grocery Shopping List</h1>
      <div className="input-section">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter an item..."
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button onClick={handleAddItem} className="btn-add">
            Add Item
          </button>
        </div>
        <span>{errors ? <p className="errors">{errors}</p> : null}</span>
      </div>
      <ul className="grocery-list">
        {groceryItems.map((item) => (
          <GroceryItemComponent
            key={item.id}
            item={item}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      {groceryItems.length > 0 ? (
        <button onClick={handleClearItems} className="btn-clear">
          Clear Items
        </button>
      ) : null}
    </div>
  );
};

export default GroceryComponent;
