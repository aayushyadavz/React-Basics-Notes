import React from "react";
import Input from "./Input";

// Created a Login component with a form element and Input components inside it.

function Login(){
    return (
      <form className="form">
        {/* 2 Input components with properties inside it. */}
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    )
}
export default Login