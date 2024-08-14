import React from "react";
import ReactDOM from "react-dom";
// import App from that App.jsx file
import App from "../components/App" // not using the .jsx extension

ReactDOM.render(
  <App />, // App component inserted in here as if it was self-closing tag.
  document.getElementById("root")
);

/* Created a folder named "components" in which created three components file and 2 components 
"Heading, List" have been used inside App conponent, then the App component is inserted and imported 
in index.jsx file which renders the components on the screen. */


// -----------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser