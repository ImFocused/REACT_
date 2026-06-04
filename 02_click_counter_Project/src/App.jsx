import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let count = 0
  
  const addValue = () => {
     // here the value of the count is increasing but it is not getting rendered on ui 
    // to overcome this we use hooks to render at multiple places
    console.log("value added", Math.random());  // just for checking in console

    if(count <20){
        setCounter(count + 1); // here we are calling the function to update the value of count and render it on ui
    }
    
  }

  const removeValue = () => {
    
    if(count > 0){
        setCounter(count - 1);  // here count -1 is the value that to be passed to fn setstate
    }
    
  }

                          // one of the HOOK .....
  let [count,setCounter] = useState(0) // here count is the variable which is to be displayed and setCounter is the function to be called 

  return (
    <>

      
      <h1>
        Counting Clicks 
      </h1>
      <h3>
        Counter : {count}
      </h3>
      <button onClick = {addValue}>
        Add Click {count}
      </button>
      <br/>
      <button onClick = {removeValue}>
        Remove Click {count}
      </button>
    </>
  )
}

export default App
