import React from "react";
import classes from "../style/Button.module.css";

const Button = ({ className, children }) => {
  return <div className={`${className} ${classes.button}`}>{children}</div>;
};

export default Button;
