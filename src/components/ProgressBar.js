import React, { useRef, useState } from "react";
import classes from "../style/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ next, previous, submit, progressWidth }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleToolTip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progressWidth}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={previous}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progressWidth}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            onMouseMove={toggleToolTip}
            onMouseOut={toggleToolTip}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progressWidth === 100 ? submit : next}
      >
        <span>{progressWidth === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
