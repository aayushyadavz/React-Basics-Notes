import React from "react";
import ReactDOM from "react-dom";
 
const coustomStyle = {
    // CSS properties in JS Objects are written in CamelCase. & the values has to be a string.
    color: "#674188",
    backgroundColor: "#E2BFD9",
    textAlign: "center",
    border: "1px solid black"
}

coustomStyle.color = "#982B1C"

ReactDOM.render(
    <div>
        <h1 style={{color: "#C8A1E0", backgroundColor: "#674188", textAlign: "center"}}>Hello World!</h1>
        <h2 style={coustomStyle}>Let's Learn React :)</h2>
    </div>
    , document.getElementById("root")
);

// Style attribute value ("color: red") is just replaced with a Javascript Object ({color: red}) for inline style in JSX file.


// ------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser