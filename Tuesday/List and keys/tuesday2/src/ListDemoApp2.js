import React, { useState } from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
}
function MemberTable({ members }) {
  const tableItems = members.map(member => (
    <TableRow key={member.id} name={member.name} age={member.age} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 25, id: 1 },
    { name: "Jan", age: 35, id: 2 },
    { name: "Janne", age: 25, id: 3 },
    { name: "Martin", age: 22, id: 4 }
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}