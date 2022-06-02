import React, {FC, useState} from 'react';
import './style.scss';
import Item from "./Item";
import IProps from "./IProps";

const List: FC<IProps> = () => {
  const [todoList, setTodoList] = useState([
    {
      text: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。',
      id: new Date().getTime(),
      ok: false
    },
    {
      text: '构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。',
      id: new Date().getTime() + 1,
      ok: false
    },
    {
      text: '无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
      id: new Date().getTime() + 3,
      ok: false
    }
  ])

  const complete = (id: number, isOk: boolean) => {
    todoList[id].ok = isOk
    setTodoList([...todoList])
  }

  return (
    <div className='list'>
      {
        todoList.map((item, index) => {
          return (
            <Item key={index} index={index} text={item.text} id={item.id} setOk={complete} />
          )
        })
      }
    </div>
  );
}

export default List;