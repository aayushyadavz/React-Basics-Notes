import React from "react";

function ToDoItem(props){
    return (
    <div onClick={() => { // this function is only gets called when onClick is triggered and we can also avoid immediate function execution of onChecked(props.id)
        props.onChecked(props.id)
    }}>
        <li>{props.text}</li>
    </div>
    ) 
}

export default ToDoItem