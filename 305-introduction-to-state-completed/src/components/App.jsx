import React from "react";

// UI = f(state); i.e the user interface is a function of the state.

// (i) Imperative Programming : Getting hold of an item and setting it's property to a new value each time when we want this change to happen.
function strike(){
  document.getElementById("root").style.textDecoration = "line-through"
}

function unStrike(){
  document.getElementById("root").style.textDecoration = null
}

// (ii) Declarative Programming : We are declaring when we are writing our code how our user interface should look under different conditions, dependent upon the state.
var isDone = false; // (The State)

// function strike() {
//   isDone = true;
// }

// function unStrike() {
//   isDone = false;
// }
// These upper codes will not work because the elements inside App func. are being rendered and they are not changeable, they have to be rerendered on the screen in order for the changes in their properties and to do that we have to learn about hooks.

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;