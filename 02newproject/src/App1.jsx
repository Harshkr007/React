import { useState } from "react";

function App1() {

    const [counter,setCounter] = useState(5);

    function addValue() {
        setCounter((preCounter) => {
            return preCounter + 1;
        })
    }
    function subValue() {
       setCounter((preCounter) => {
        return preCounter - 1;
       }) 
    }

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