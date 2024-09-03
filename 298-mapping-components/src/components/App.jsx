import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// new function which is passed in map function down below
function createCard(contact) {
  return <Card 
  // This key prop has to be expelled exactly like this and it's expected by React and it's value should be unique across all of the repeated things.
    key={contact.id}
    id={contact.id} // created a coustom prop in order to use it, cause we cannot use key prop.
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />
}

// map function loops through the contacts array and for every single item that exists in array calls the createCard func. and it passes over each of the objects present inside the array to that contact parameter and we can get hold of it inside those properties.

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* map function on contacts array and a func. is passed inside this map func. */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;