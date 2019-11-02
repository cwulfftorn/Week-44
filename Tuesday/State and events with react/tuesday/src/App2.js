import React, { useState, useEffect } from "react";

export default function App2() {
  const [time, setTime] = useState(Time());
  const [run, setRun] = useState(false);
  //setInterval(() => {},1000);
  useEffect(() => {
    if (run === false) {
      return;
    }
    const timer = setInterval(() => {
      setTime(Time());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [run]);

  return (
    <div>
      <h3>Exercise 2</h3>
      Time is: {time}
      <br></br>
      <button onClick={() => setRun(!run)}>Time</button>
    </div>
  );
}

function Time() {
  return new Date().toLocaleString();
}