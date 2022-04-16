//Import React Module to allow JSX manipulation
import React from "react";
//-------------------------------------------------------------------
function Login() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
//---------------------------------------------------------------------
//Export Login Component to be used by App.jsx
export default Login;
//---------------------------------------------------------------------
