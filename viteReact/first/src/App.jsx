import { useState } from "react";


function App() {
  // let counter = 0;

  let [counter , setCounter] = useState(0);

  const addValue = ()=>{
    counter++;
    setCounter(counter);
    // console.log("mm kar diya add bhai", counter);
  }

  const subValue = ()=>{
    if(counter == 0){
      counter = 0;
      setCounter(counter);
    } 
    else{
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>working</h1>
     <h2>Counter Value : {counter} </h2>
     <button onClick={addValue}>Increase Value </button>
     <br />
     <button onClick={subValue}>Decrease Value</button>
    </>
  )
}

export default App
