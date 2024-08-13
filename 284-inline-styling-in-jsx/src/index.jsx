import React from "react";
import ReactDOM from "react-dom";

const coustomStyle = {
    color: "#674188",
    backgroundColor: "#E2BFD9",
    textAlign: "center"
}

ReactDOM.render(
    <div>
        <h1 style={{color: "#C8A1E0", backgroundColor: "#674188", textAlign: "center"}}>Hello World!</h1>
        <h2 style={coustomStyle}>Let's Learn React :)</h2>
    </div>
    , document.getElementById("root")
);




// ------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser