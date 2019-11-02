import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";


//1 Understanding ES6 Modules – import and export

function App() {
  return (
    <div className="App">
      <h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      </h2>
    </div>
  );
}

export default App;
