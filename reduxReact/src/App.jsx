// import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodos from './components/AddTodos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux</h1>
      <AddTodos/>
      <Todo/>
    </>
  )
}

export default App
