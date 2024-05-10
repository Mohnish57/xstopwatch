import React from "react";
import { useState, useEffect } from "react";
const StopWatch = () => {
  let [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const updateTime = () => {
    setTime((prev) => prev + 1);
  };

  const handleStart = () => {
    setStart(!start);
  };

  const handleReset = () => {
    setTime(0);
    setStart((prev) => !prev);
  };

  useEffect(() => {
    console.log("inside useEffect");
    let myTimer;
    // if true (start)
    if (start) {
      console.log("started");
      myTimer = setInterval(() => {
        updateTime();
      }, 1000);
    } else {
      console.log("else condition");
      clearInterval(myTimer);
    }
    return () => {
      console.log("cleanup function executed");
      clearInterval(myTimer);
    };
  }, [start]);

  const formattime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div
      style={{
        backgroundColor: "yellow",
        border: "1px solid black",
        width: "30%",
        margin: "1rem auto",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <h1>Stopwatch</h1>
      <h2>Time: {formattime(time)}</h2>

      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: ".5rem",
          margin: ".5rem",
        }}
        onClick={handleStart}
      >
        {start ? "Stop" : "Start"}
      </button>
      <button
        style={{ backgroundColor: "black", color: "white", padding: ".5rem" }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
