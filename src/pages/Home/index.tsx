import { useState } from "react"
import Title from "../../components/Title"
import List from "../../components/List"

const Home = (props: any) => {
  const [showInput, setShowInput] = useState(false)
  const [todoTime, setTodoTime] = useState(1)

  const complete = (showInput: boolean): void => {
    setShowInput(showInput)
    setTodoTime(new Date().getTime())
  }

  return (
    <>
      <Title titleText="uyou Todo" setShowInput={complete} setElement={() => props.setElement()} />
      <List showInput={showInput} setShowInput={complete} todoTime={todoTime} />
    </>
  )
}

export default Home