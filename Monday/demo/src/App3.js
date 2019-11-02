import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


function WelcomePerson(props) {
  // Destructuring person for ease of use
  // Taking person from props
  const person = props.person;
  // Taking elements from person
  const { firstName, lastName, gender, email, phone } = person;

  return (
    <div>
      <p>
        Person: <br></br>
        First Name: {firstName} <br></br>
        Last Name: {lastName} <br></br>
        Email: {email} <br></br>
      </p>
    </div>
  );
}

const validPersons = [
  { firstName: "Kurt", lastName: "Wonnegut", email: "k@wonnegut.dk" },
  {
    firstName: "Kurt",
    lastName: "Wonnegut",
    email: "k@wonnegut.dk",
    friends: ["Kim", "Janne"]
  }
];

const errorPersons = [
  { firstName: "Jane", email: "j@wonnegut.dk", phone: "12345" },
  { firstName: "Jane" }
];

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};


Welcome.propTypes = {
  name: PropTypes.string
};


function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      <br></br>
      Map:
      <br></br>
      {names.map((p, index) => (
        <WelcomePerson person={p} key={index} />
      ))}
      <br></br>
      Valid Persons:
      <br></br>
      <WelcomePerson person={validPersons[0]} />
      <WelcomePerson person={validPersons[1]} />
      <br></br>
      Error Persons:
      <br></br>
      <WelcomePerson person={errorPersons[0]} />
      <WelcomePerson person={errorPersons[1]} />
      {/*<Welcome />
      <Welcome name={45} />*/}
    </div>
  );
  
}

export default App;