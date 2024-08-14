// In lot of React apps we see this coustom file App.jsx

import React from "react"; // In order to use this code we have to import React module.
// Importing Heading component
import Heading from "../components/Heading";
// Importing List component
import List from "../components/List";

function App(){
    return ( // function returning a div which consist of Heading and List components.
        <div>
            <Heading />
            <List />
        </div>
    )
}

// Exporting App function as the default export
export default App // not using "()"