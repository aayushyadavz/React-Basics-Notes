import React from "react";
import Avatar from "./Avatar"
import contacts from "../contacts";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* Inside our card component we can access that Object called props which has all of those properties (img, name, tel, email) passed in as an object in App.jsx */}
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img}/>
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel}/>
        <Details detailInfo={props.email}/>
      </div>
    </div>
  );
}

export default Card;
