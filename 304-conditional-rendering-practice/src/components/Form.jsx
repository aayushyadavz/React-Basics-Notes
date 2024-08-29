import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* When isRegistered is false then the 2nd expression will not evaluated,
          and when it's true then the 2nd expression will be evaluated. */}
      {!props.isRegistered && <input type="password" placeholder="Confirm Password"/> }
      <button type="submit">
        {/* When isRegister is ture then button text will be "Login",
            Otherwise Button Text will be "Register". */}
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;