import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(8); // default length for password 
  const [numbers,setnumbers] = useState(false); // if we have to use numbers in pass or not 
  const [char,setchars] = useState(false); // also if have to use chars in pass
  const [password,setpassword] = useState(""); // input field where password shows up

  const passwdgene = useCallback(()=>{
    pass=""
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) str+="0123456789";
    if(char) str+="!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0;  i< array.length; i++) {
      let char  = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char)
      
    }
    setpassword(pass);

  },[length,numbers,char,setpassword]);

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-white pt-4">
        PASSWORD GENERATOR  
      </h1>

      <div className="text-orange-500 rounded-lg w-full max-w-md mx-auto my-8 px-4 shadow-xl bg-gray-600 text-center" >
        TEST
        <div className="overflow-hidden flex shadow-rounded-lg">
          

          <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white rounded-xl text-black"
          placeholder="Password"
          readOnly
          />
          

        </div>
      </div>
    </>
  )
}

export default App
