import React, { useState, useEffect } from "react";
import "./App.css";

function App(props) {
  const { initialValue, increment } = props;

  const [count, setCount] = useState(
    Number(window.localStorage.getItem("count") || initialValue)
    );

    useEffect(() => {
      window.localStorage.setItem("count", count);
    });
  

    return (
      <div className="App">
        <p>{count}</p>
        <button onClick={() => setCount(count + increment)}>
          Add
        </button>
        <br></br>
        {}
        <button onClick={() => setCount(count - increment)}>
          Decrement
        </button>
      </div>
    );
  }
  
  export default App;


