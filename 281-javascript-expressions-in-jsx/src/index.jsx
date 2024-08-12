import React from "react";
import ReactDOM from "react-dom";

const firstName = "Ayush"
const lastName = "Yadav"
const num = 7

ReactDOM.render(
    <div>
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
        <p>Your num value is {num}</p>
        <p>Your expression value is {3 + 4}</p>
        <p>Your random number is {Math.floor(Math.random() * 10) + 1}</p>
    </div>,
    document.getElementById("root")
);

// By using JSX we are able to insert HTML into Javascript but we can also insert Javascript inside that HTML element.

// We can only write Javascript expressions inside HTML elements not statments like if/else, loops e.t.c.

// A expression will be evaluated to a value, but statments actually asking the computer to do some work.



//----------------------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser