import React, { useState } from "react";

function App() {
  const [ inputText, setInputText ] = useState("") // initial value set to empty string
  const [ items, setItems ] = useState([]) // initial value set to empty array

  function handleChange(e) {
    const newValue = e.target.value
    setInputText(newValue) // updating the state from empty string to newValue value
  }

  // addItem function is called on clicking submit button
  function addItem(){
    setItems(preItems => {
      return [...preItems, inputText]
    }) // updating the state from empty array to previous values & inputText value in that array
    setInputText("") // calling setInputText func. and pass in an empty string to clear the value after adding
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleChange} // calling handleChange function here
          type="text" 
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* map function on items array */}
          {items.map((todoItem) => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;