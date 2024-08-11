// React works by creating these JSX files.

import React from "react";
import ReactDOM from "react-dom";

// Using ReactDOM module's render method in order to display this div in that #root div.
ReactDOM.render( // This render func takes 2 inputs.
  // 1st is WHAT TO SHOW.
  <div> 
    <h1>Hello World!</h1>
    <p>Done Using React.</p>
  </div>,
  // 2nd is WHERE TO SHOW.
  document.getElementById("root")
);

// Doing the same with Vanilla Javascript
let h1 = document.createElement('h1')
h1.innerHTML = "This is a Heading"
document.getElementById("root").appendChild(h1)

// Behind the Scene

// Our HTML is picked up by a compiler and it gets complied down to actual javascript and the compiler comes from including that upper mentioned React module.

// Inside this React module there is something called Babel (https://babeljs.io/) and it's a JS Compiler which takes next-gen JS (ES6) & compile it down to a version of JS that every browser can understand. Also includes compiling JSX down to plane old Javascript.



// ----------------------------------------------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser