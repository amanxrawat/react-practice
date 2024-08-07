import { useState , useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [character , setCharacter] = useState(false);
  const [password , setPassword] = useState("");


  const passgen = useCallback( ()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890";
    if(character) str += "@#%&*%$";


    for (let index = 0; index < length; index++) {
        let char = Math.floor(Math.random() * str.length)+1
        pass += str.charAt(char);
    }
    // console.log(pass);
    setPassword(pass);


  } , [length , numberAllowed , character , setPassword])

  useEffect(()=>passgen(),
  [length,setCharacter,setNumberAllowed,setPassword,passgen])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // this is optional select
    passwordRef.current?.setSelectionRange(0,21);
    // to select a range to copy text 
    
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordRef = useRef(null);


  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-md bg-slate-700 text-white mt-14 p-3">
        <div className=" flex gap-2 text-orange-600">
          <input type="text"
          className="rounded-md  w-2/3"
          value={password}
          placeholder= " {password} "
          ref={passwordRef}/>

          <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-500 rounded-md w-1/3 text-white"
          value={""}
          >Copy</button>

        </div>
        <div className="flex gap-3 m-2">
          <div className="flex gap-2">
            <input type="range" 
            min={8}
            max={30}
            value={length}
            onChange={(e)=>setLength(e.target.value)} 
            className="cursor-pointer" />
            <label htmlFor=""
            >length:{length}</label>
          </div>
          <div>
            <input type="checkbox"
            id="numberInput"
            onChange={()=>setNumberAllowed((prev) => !prev)} />

            <label htmlFor="">Numbers</label>

          </div>
          <div>
            <input type="checkbox"
            id="characterInput"
            onChange={()=>setCharacter((prev) => !prev)} />

            <label htmlFor="">character</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
