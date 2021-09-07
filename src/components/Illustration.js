import React from "react";
import signupImage from "../assets/images/signup.svg";
import classes from "../style/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
