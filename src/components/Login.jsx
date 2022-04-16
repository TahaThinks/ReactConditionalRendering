//Import React Module to allow JSX manipulation
import React from "react";
//-------------------------------------------------------------------
//Import Login Component:
import Input from "./Input";
//-------------------------------------------------------------------

function Login() {
  return (
    <form className="form">
      <Input typeName="text" placeholderName="Username" />
      <Input typeName="password" placeholderName="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
//---------------------------------------------------------------------
//Export Login Component to be used by App.jsx
export default Login;
//---------------------------------------------------------------------
