import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Setting from './pages/Setting'

function App() {
  const [current, setCurrent] = useState(0)

  const setElement = () => {
    switch (current) {
      case 0: 
        return <Home setElement={(e: number) => setCurrent(e)} />
      case 1:
        return <Setting />
      default:
        return null
    }
  }
  return (
    <>
      {
        setElement()
      }
    </>
  )
}

export default App
