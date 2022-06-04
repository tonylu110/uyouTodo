import { useState } from 'react'
import './App.css'
import Title from "./components/Title";
import List from "./components/List";

function App() {
  const [showInput, setShowInput] = useState(false)
  const [todoTime, setTodoTime] = useState(1)

  const complete = (showInput: boolean): void => {
    setShowInput(showInput)
    setTodoTime(new Date().getTime())
  }

  return (
    <div className="App">
      <Title setShowInput={complete} />
      <List showInput={showInput} setShowInput={complete} todoTime={todoTime} />
    </div>
  )
}

export default App
