import React from "react";
import Login from "./Login";

let isLoggedIn = false
const currTime = new Date().getHours()

// Ternary & AND Operator
function App() {
  
  return <div className="container">
    {/* If isLoggedIn is true we are going to return a h1 else we will return a Login component. */}
    { isLoggedIn ? <h1>Hello</h1> : <Login /> } 
    {/* Expression ? Expression : Expression 
    Here, Ternary operator has been used which consist of 3 expressions and expressions can be used inside HTML elements.*/}

    {/* --------------------------------------------------------------------------------------- */}

    {/* If the currTime is greater than 12 o clock, then we are going to render a h1 and if currTime is less than 12 then we don't want to render anything. */}
    {/* {currTime > 12 ? <h1>Why are you still working</h1> : null} */}
    {/* { currTime > 12 && <h1>Why are you still working</h1> } */}
    {/* Expressions && Expressions 
    Here, AND Operator is used, so when the 1st expression becomes false then the 2nd expression will not be evaluated. Same as in the upper espressions when the currTime is less than 12 then the 2nd expression will not be evaluated. */}
    </div>
}

export default App;