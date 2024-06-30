import { useState } from "react";
import App1 from "./App1.jsx";

function App() {
  /*
    Hooks are the set methods designed in react which is used to propagate the change in any value , any state,any condition etc.
    
    To use a hook you first have to import it from react library
    eg: import { useState } from 'react'

    useState() is hook which takes argument like :
    some value,some object,some array.....
    and returns an array of two values 
    1st is a variable with the resultant 
    2nd is a funtion to manupulate this value


  */
  let [counter, setCount] = useState(5);

  const addValue = () => {
    if(counter != 20){
      counter = counter + 1;
      setCount(counter);
    }else{
      alert("Maximum value reached");
    }
   
  };

  const subValue = () => {
    if (counter != 0) {
      counter = counter - 1;
      setCount(counter);
    }else{
      alert("Minimum value reached");
    }
  };

  return (
    <>
      <h1>Hello its Harsh</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subValue}>remove value {counter}</button>
    </>
  );
}

export default App1;
