// How we can get the user inputs from the input element and how we can use the submit button in order to use the information that the user typed.

import React, { useState } from "react";

function App() {
  const [ name, setName ] = useState("")
  const [ headingText, setHeading ] = useState("")

  // This function is going to be triggered everytime the input is changed / user type any letter.
  function handleChange(event){
    setName(event.target.value) // updating the state of that name variable
  }

  // When the button is clicked we are triggering a function 
  function handleValue(event){
    setHeading(name) // setting the headingText to the value of the name variable.
    event.preventDefault() // to prevent the default behaviour of the form
  }

  return (
    <div className="container">
      {/* headingText is displayed in our h1 */}
      <h1>Hello {headingText}</h1>
      {/* when we click on the button in some form it triggers a method on the form called onSubmit and here when button is clicked it triggers the onSubmit of the form and calls the function passed in. */}
      <form onSubmit={handleValue}>
        <input 
          // Event on input (onChange)
          // This is triggered every single time the value of the input changes.
          onChange={handleChange} 
          type="text" 
          placeholder="What's your name?"
          value={name} // set the value to the variable that comes from the 'event.target.value'.
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
