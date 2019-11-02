import React from 'react';

export default function App(){
    const data = [{name:"Kurt",id:1},{name:"Hanne",id:2},{name:"Pia",id:3}]
    return (
        <div>
            <h2>List</h2>
            <ListDemo names={data} />
        </div>
    )
}

function ListDemo(props){
    const {names} = props;
    const lis = names.map((n)=> <li key={n.id}>{n.name}</li>)
    return (
        <div style={{color: "blue"}}>
            <ul className="table">
          {lis}
          </ul>
        </div>
    )
}
