import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Setting from './pages/Setting'

function App() {
  const [current, setCurrent] = useState(0)

  const setElement = () => {
    switch (current) {
      case 0: 
        return <Home setElement={() => setCurrent(1)} />
      case 1:
        return <Setting setElement={() => setCurrent(0)}/>
      default:
        return null
    }
  }
  return (
    <div className="App">
      {
        setElement()
      }
    </div>
  )
}

export default App
