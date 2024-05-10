import React, { useState } from "react";


const GroceryItemComponent = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [newItem, setNewItem] = useState(item.name);
  return (
    <>
      <li>
        {isEditing ? (
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}

        <div>
          <button className="btn-edit">Edit</button>
          <button className="btn-delete">Delete</button>
        </div>
      </li>
    </>
  );
};

export default GroceryItemComponent;
