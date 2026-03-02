import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-2 rounded-2xl font-bold">

          <button 
          onClick={()=>setColor("red")}className="outline-none px-4 rounded-full text-white shadow-lg justify-center"
          style={{backgroundColor : "red"}}>RED

          </button>
          <button 
          onClick={()=>setColor("green")}className="outline-none px-4 rounded-full text-white shadow-lg justify-center"
          style={{backgroundColor : "green"}}>GREEN

          </button>
          <button 
          onClick={()=>setColor("blue")}className="outline-none px-4 rounded-full text-white shadow-lg justify-center"
          style={{backgroundColor : "blue"}}>BLUE

          </button>
          <button 
          onClick={()=>setColor("purple")}className="outline-none px-4 rounded-full text-white shadow-lg justify-center"
          style={{backgroundColor : "purple"}}>PURPLE

          </button>
          <button 
          onClick={()=>setColor("yellow")}className="outline-none px-4 rounded-full text-black shadow-lg justify-center"
          style={{backgroundColor : "yellow"}}>YELLOW

          </button>
          

        </div>

      </div>

    </div>

      
    </>
  )
}

export default App
