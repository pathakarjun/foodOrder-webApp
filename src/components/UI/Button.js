import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${"bg-red-buttonred rounded-2xl shadow-2xl text-white"} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
