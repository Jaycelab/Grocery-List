import React, { useState } from "react";

const GroceryItemComponent = ({ item, handleEditItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);

  const onEdit = () => {
    handleEditItem(item.id, newItem);
    setIsEditing(false);

    //check later********
    //setNewItem("");
  };

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
          <button
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
            className="btn-edit"
          >
            {isEditing ? "Save" : "Edit"}
          </button>

          <button className="btn-delete">Delete</button>
        </div>
      </li>
    </>
  );
};

export default GroceryItemComponent;
