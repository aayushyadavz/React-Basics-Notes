import React, { useState } from "react";


// Example 
const fullName = {
  fName: "Ayush",
  lName: "Yadav"
}
const details = {
  ...fullName,
  email: "ayushyadav@gmail.com",
  username: "ayushyadavz"
}
console.log(details);
// Output,
/* {
  email: "ayushyadav@gmail.com"
  fName: "Ayush"
  lName: "Yadav"
  username: "ayushyadavz"
} */


function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(preValue => {
      // More simpler way using Spread Operator
      return {
        ...preValue, // includes all the values from previous values Object
        [name] : value // key is the 'name' and the value is 'value' of the event.target
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
