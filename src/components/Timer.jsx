import React, { useState, useEffect } from "react";

export const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId); // cleanup on unmount or if seconds changes
    }
  }, [seconds]);

  return <div className="timer">Time remaining: {seconds} seconds</div>;
};
