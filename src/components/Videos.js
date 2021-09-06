import React from "react";
import classes from "../style/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
