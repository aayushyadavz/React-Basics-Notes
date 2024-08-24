import React from "react";

function Details(props){
    // Inside our details component we can access that Object called props which has that property (detailInfo) passed in as an object in Card.jsx
    return <p className="info">{props.detailInfo}</p>
}

export default Details