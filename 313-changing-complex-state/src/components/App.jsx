import React, { useState } from "react";

function App() {
  // const [ fName, setFName ] = useState("")
  // const [ lName, setLName ] = useState("")

  // function updateFName(e){
  //   const firstName = e.target.value
  //   setFName(firstName)
  // }

  // function updateLName(e){
  //   const lastName = e.target.value
  //   setLName(lastName)
  // }

  // Better Way
  const [ fullName, setFullName ] = useState({
    fName: "",
    lName: ""
  })

  function handleChange(e){
    // const newValue = event.target.value
    // const inputName = event.target.name
    // console.log(newValue); // Gives us the changes or the letters typed in that input
    // console.log(inputName); // Gives us the input names (eg. fName, lName) on which we are typing 

    // De-Structuring
    const { value, name } = e.target

    setFullName( (preValue) => {
      // console.log(preValue); // it prints an object with fName empty and lName empty
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        }
      }
    })
    
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;