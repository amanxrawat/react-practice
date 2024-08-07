import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const bgcolorset = ()=>{
    
    }
  // const [count, setCount] = useState(0)
    const [color , setColor] = useState("olive");
  return (
    <>
    <div className=' h-screen w-screen  ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap  gap-1 p-3 justify-center bottom-16 w-full '>
              <button onClick={()=>setColor("red")}
                  className=' text-white'
                  style={{backgroundColor:"red"}}
                  >red</button>
              <button onClick={()=>setColor("green")}
                  className=' text-green-400 border-2 border-green-950'
                  style={{backgroundColor:"green"}}
                  >green</button>
              <button onClick={()=>setColor("skyblue")}
                  className=' text-blue-800 border-2 border-blue-950'
                  style={{backgroundColor:"skyblue"}}
                  >Skyblue</button>
              <button onClick={()=>setColor("black")}
                  className='text-gray-500 border-2 border-gray-700'
                  style={{backgroundColor:"black"}}
                  >black</button>
              <button onClick={()=>setColor("olive")}
                  className='text-green-900 border-2 border-green-900'
                  style={{backgroundColor:"olive"}}
                  >olive</button>
        </div>
      </div>  
    </>
  )
}



// const changeColor = (newColor) => {
//   setColor(newColor);
// }

// <button onClick={() => changeColor("green")}
//             className='text-green-400 border-2 border-green-950'
//             style={{ backgroundColor: "green" }}
//           >green
//           </button>

// this way we can do the same but using a function actually the onclick needs a funtion so we can pass the reference but to pass a value parameter we need to do it like this.

export default App
