//Import React Module for JSX Manipulation
import React from "react";
//---------------------------------------------------------------------

function Input(props) {
  return <input type={props.typeName} placeholder={props.placeholderName} />;
}

//Export Input Component to bre used by Login.jsx
export default Input;
