import React from 'react';
import Person from "./file2";
import { males } from "./file2";
import { females } from "./file2";
const { firstName, email } = Person;

console.log([...males, ...females]);
console.log([...males, firstName, "Helle", ...females, "Tina"]);

export default function App2(){
    return (
        <div>
            <h3>Exercise 2</h3>
            {

            }
            <p>
                firstName: {firstName} and email: {email}
            </p>
        </div>
    )
}

const personV2 = {
    email,
    firstName,
    friends: [...males, ...females],
    gender: Person.gender,
    lastName: Person.lastName,
    phone: 123456
  };
  console.log(personV2);
  
 