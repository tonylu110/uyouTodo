import { useState } from 'react'
import './App.css'
import Title from "./components/Title";
import List from "./components/List";

function App() {
  const [showInput, setShowInput] = useState(false)

  const complete = (showInput: boolean): void => {
    setShowInput(showInput)
  }

  return (
    <div className="App">
      <Title setShowInput={complete} />
      <List showInput={showInput} setShowInput={complete} />
    </div>
  )
}

export default App
