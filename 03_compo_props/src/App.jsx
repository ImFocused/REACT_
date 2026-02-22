import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'  // here imported from components card file

function App() {
  const [count, setCount] = useState(0)

  let myobj= {
    name : "pj",
    age : 22
  }

  return (
    <>
      <h1 className = "text-3xl font-bold underline bg-blue-400 mb-4">
        Tailwind Test 
      </h1>

      <Card username="PJ" someobj={myobj}/>   
      {/* // here we can pass objects , arrays , strings in the form of {} and we can access it in the card.jsx file using props */}
      <Card username = "bruh" someobj={myobj}/>
      
      
          
      
    
    </>
  )
}

export default App
