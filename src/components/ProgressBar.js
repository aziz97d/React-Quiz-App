import React from "react";
import classes from "../style/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ next, previous, submit, progressWidth }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={previous}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progressWidth}% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
      {progressWidth === 100 ? (
        <Button className={classes.next} onClick={submit}>
          <span>Submit</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      ) : (
        <Button className={classes.next} onClick={next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      )}
    </div>
  );
};

export default ProgressBar;
