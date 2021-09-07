import React from "react";
// import signupImage from "../assets/images/signup.svg";
import classes from "../style/Illustration.module.css";

const Illustration = ({ image, ...rest }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} {...rest} />
    </div>
  );
};

export default Illustration;
