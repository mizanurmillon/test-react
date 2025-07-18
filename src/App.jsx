import { useState } from "react";
import Counter from "./assets/Counter";
import User from "./assets/User";

function App() {

  function callFun(){
    alert('Event Add Function Call');
  }

  const fruit=(name)=>{
    alert(name);
  }

  const [name,setName]=useState('Md Mizanur Rahman');

  const update=()=>{
    setName('Md Millon Hossain');
  }

  const [toggle,setToggle]=useState(false);

  return (
    <>
      <h2>Event Add Function Call</h2>

      <button onClick={()=>fruit('Apple')}>Apple Me</button>
      <button onClick={()=>fruit('Banana')}>Banana Me</button>

      <br />

      <h2>State in React JS</h2>

      <h1>{name}</h1>

      <button onClick={update}>Update</button>

      <Counter />

      <h1>Toggle in React JS</h1>

      <button onClick={()=>setToggle(!toggle)}>Toggle</button>

      {
        toggle ? <User /> : null
      }
      

    </>
  )
}

export default App
 