import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    {/* using className in the place of class, because here these codes looks like HTML but these are rendered down to Javascript. */}
    <h1 className="heading">My Favourite Foods</h1>

    {/* Here in JSX we have to use /> for img tag. */}
    {/* changing JS expression to add gray color on these picsum images. (https://picsum.photos/200/300?grayscale) */}
      <img src={img + "?grayscale"} alt="" /> 
    
      <img className="food-img" src="https://lh6.googleusercontent.com/DeHsaiZNjMgQ7KOMqu5BzSteUsVKf0obfPMqDtG16slGzEw397kdedJ9QB-6bZfMUQoLoYzvX0FLnzdJfKt8dxUOxd9J35c07xxJF6q1s6isM1YyiJOMj7nRERhbiXg8qQ96ZB6w=s0" alt="" />

      <img className="food-img" src="https://media.cnn.com/api/v1/images/stellar/prod/170302114154-masala-dosa.jpg?q=w_1015,c_fill/f_webp" alt="" />

      <img className="food-img" src="https://media.cnn.com/api/v1/images/stellar/prod/170206165040-dubai-michelin-dining-boca.jpg?q=w_1015,c_fill/f_webp" alt="" />

  </div>,
  document.getElementById("root")
);

// In JS, in order to access classes that exist on an element, we use a property called className. And here in JSX we write attributes in camel case.




// -------------------------------------------------------------------------------------
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser