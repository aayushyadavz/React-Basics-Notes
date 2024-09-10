import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => { // filtering through all of the previous items in our items array and get rid of the ones which match the id
        return index !== id // going to return a final array that is going to return all the items where the index is not equal to the id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => ( // todoItem is the value from items array and index is the index of the todoItem in this items array
            <ToDoItem 
              key={index} // mandatory
              id={index} // index passed in as value of id property
              text={todoItem}
              onChecked={deleteItem} // deleteItem function passed in as value of onChecked property
            /> // ToDoItem component
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;