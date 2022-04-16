//Import React module for JSX manipulation
import React from "react";
//---------------------------------------------------------------------
//Import App & Input Components
import Login from "./Login";
//---------------------------------------------------------------------

var isLoggedin = false;

function renderConditionally() {
  if (isLoggedin) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
