import React from "react";
import classes from "../style/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" />
    </div>
  );
};

export default Answers;
