//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
let greetings;

const coustomStyle = {
    color: ""
}

if (currentTime < 12) {
    greetings = "Good Morning";
    coustomStyle.color = "red"
} else if (currentTime < 18) {
    greetings = "Good Afternoon";
    coustomStyle.color = "green"
} else {
    greetings = "Good Evening";
    coustomStyle.color = "blue"
}

ReactDOM.render(<h1 className="heading" style={coustomStyle}>{greetings}</h1>, document.getElementById("root"));




//------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
