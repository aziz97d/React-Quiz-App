import React from "react";
import classes from "../style/Analysis.module.css";
import Answers from "./Answers";

const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Answers />
    </div>
  );
};

export default Analysis;
