import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../style/MiniPlayer.module.css";

const MiniPlayer = ({ videoID, title }) => {
  const [status, setStatus] = useState(true);
  const buttonRef = useRef();
  const videoUrl = `http://www.youtube.com/watch?v=${videoID}`;
  function toggleMiniPlayer() {
    if (status) {
      setStatus(false);
      buttonRef.current.classList.remove(classes.floatingBtn);
    } else {
      setStatus(true);
      buttonRef.current.classList.add(classes.floatingBtn);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        width="300px"
        height="168px"
        url={videoUrl}
        playing={!status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
