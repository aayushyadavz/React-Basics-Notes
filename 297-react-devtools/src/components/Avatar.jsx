import React from "react";

function Avatar(props){
    // Inside our Avatar component we can access that Object called props which has that property (image) passed in as an object in Card.jsx
    return <img className="circle-img" src={props.image} alt="avatar_img" />
}

export default Avatar