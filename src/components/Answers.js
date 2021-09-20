import React from "react";
import classes from "../style/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ input, options, handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => {
        return input ? (
          <Checkbox
            className={classes.answer}
            text={option.title}
            checked={option.checked}
            onChange={(e) => {
              handleChange(e, index);
            }}
          />
        ) : (
          <Checkbox
            className={`${classes.answer} ${
              option.correct
                ? classes.correct
                : option.checked
                ? classes.wrong
                : null
            } `}
            text={option.title}
            defaultChecked={option.checked}
            disabled
          />
        );
      })}
    </div>
  );
};

export default Answers;
