/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          backgroundColor: "red",
          margin: "20px",
          padding: "10px",
          color: "white",
          fontSize: "130px",
        }}
      >
        {hours.toString().padStart(2, "0")}:
      </h1>
      <h1
        style={{
          backgroundColor: "red",
          margin: "20px",
          padding: "10px",
          color: "white",
          fontSize: "130px",
        }}
      >
        {minutes.toString().padStart(2, "0")}:
      </h1>
      <h1
        style={{
          backgroundColor: "red",
          margin: "20px",
          padding: "10px",
          color: "white",
          fontSize: "130px",
        }}
      >
        {seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}

export default CountdownTimer;
