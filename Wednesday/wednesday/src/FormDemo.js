import React, {useState} from "react";
 
const NameForm = () => {
    const initialState = "";
    const [name, setName] = useState(initialState);
  
    const handleChange = event => {
      const target = event.target;
      const id = target.id;
      const value = target.value;
      setName(value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      window.alert(name);
      setName(initialState);
    };

  
 
  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Name:
          <input type="text" />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}

