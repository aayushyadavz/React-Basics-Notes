import React, { useState } from "react"; // Importing useState function as a non default export.

// There is a rule for using Hook(useSate) is that we must use a Hook inside a functional component.

function App() {
  // This useState function comes from the React module.
  // And this useState comprised of an array with 2 items.
  const [count, setCount] = useState(0)
  // The first item (initial state) of the useState will be equivalent to count and the second one (function) will be equvalent to setCount function.

  function increase(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count - 1)
  }

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  );
}

export default App;