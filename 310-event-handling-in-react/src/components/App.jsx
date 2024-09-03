import React, { useState } from "react";

function App() {
  const [ headingText, setHeadingText ] = useState("Hello")
  const [ isHovered, setIsHovered ] = useState(false)

  function handleClick(){
    setHeadingText("Submitted")
  }

  function handleMouseOver(){
    setIsHovered(true)
  }

  function handleMouseOut(){
    setIsHovered(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        style={{ backgroundColor: isHovered ? "black" : "white" }} 
        onClick={handleClick}
      >Submit</button>
    </div>
  );
}

export default App;