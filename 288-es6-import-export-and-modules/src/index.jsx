import React from "react";
import ReactDOM from "react-dom";

// Importing the constant 'pi' and functions from Math.jsx
import pi, { doublePi, triplePi } from "./Math";

// Note: 
// - 'pi' is the default export, so it can be renamed when imported (e.g., pie, PI, etc.).
// - The functions 'doublePi' and 'triplePi' are named exports, so their names must remain consistent during import.

// Alternatively, you can import everything from Math.jsx and assign it an name:
// import * as pi from "./Math"

// console.log(pi); // pi is actually an object with properties.

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    {/* Parentheses '()' are used because 'doublePi' and 'triplePi' are functions, and we want to execute them here to get their values. */}
    <li>{doublePi()}</li> 
    <li>{triplePi()}</li>
  </ul>

  // Alternative rendering using the 'import * as pi' syntax:
  // <ul>
  //   <li>{pi.default}</li>
  //   <li>{pi.doublePi()}</li>
  //   <li>{pi.triplePi()}</li>
  // </ul>
  ,
  document.getElementById("root")
);
 
// - If we use a wildcard import (e.g., `import * as pi from "./Math"`), we lose the benefit of having a single default export.
// - Using a single default export and incorporating specific functions makes our code clearer and ensures we're only importing what we need, avoiding unnecessary imports.



//---------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser