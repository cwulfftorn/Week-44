import React, { useState, useEffect } from "react";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers);
  // const listItems = numbers.map((n, index) => <li key={index}>{n}</li>);
  const listItems = numbers.map(number => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

function NumberTable({ numbers }) {
  console.log("numbertable numbers: ", numbers);
  const tableItems = numbers.map(number => (
    <NumberRow key={number.toString()} number={number} />
  ));
  return (
    <div>
      <h4>Table:</h4>
      <table>
        <tbody>{tableItems}</tbody>
      </table>
    </div>
  );
}
function NumberRow(props) {
  return (
    <tr>
      <td>{props.number}</td>
    </tr>
  );
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      {
        //<NumberList numbers={props.numbers} />
      }
      <NumberTable numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumbers([...numbers, numbers.length + 1]);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="App">
      <ListDemo numbers={numbers} />
    </div>
  );
}
