//Import React Module to allow JSX manipulation
import React from "react";
//-------------------------------------------------------------------
//Import Login Component:
import Input from "./Input";
//-------------------------------------------------------------------

function Login() {
  return (
    <form className="form">
      <Input />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
//---------------------------------------------------------------------
//Export Login Component to be used by App.jsx
export default Login;
//---------------------------------------------------------------------
