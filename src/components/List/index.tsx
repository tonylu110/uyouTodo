import React, {FC, useState} from 'react';
import './style.scss';
import Item from "./Item";
import IProps from "./IProps";
import LocalStorage from "../../util/LocalStorage";
import FirstLoad from "../../util/FirstLoad";
import ITodoList from "../../interface/ITodoListArray";
import IToDoListData from "../../interface/IToDoListData";
import moment from "moment";
import getOkStyle from './Item/getOkStyle';
import i18n from './i18n';

const List: FC<IProps> = ({
  showInput,
  setShowInput,
  todoTime
}) => {
  FirstLoad()
  const localStorageTodoList: ITodoList[] = LocalStorage('get')!
  const [todoList, setTodoList] = useState(localStorageTodoList)
  const [showOkButton, setShowOkButton] = useState('')
  const [todoText, setTodoText] = useState('')

  const complete = (id: number, isOk: boolean) => {
    for(let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        todoList[i].ok = isOk
      }
    }
    setTodoList([...todoList])
    const localStorageSetTodoList: IToDoListData = {
      data: todoList
    }
    LocalStorage('set', localStorageSetTodoList)
  }

  const onKeyUp = (e: any) => {
    if (e.target.value !== '') {
      setShowOkButton('1')
    } else {
      setShowOkButton('')
    }
    setTodoText(e.target.value)
  }

  const addTodo = () => {
    const newToDoList: ITodoList = {
      text: todoText,
      id: todoTime,
      ok: false
    }
    todoList.unshift(newToDoList)
    setTodoList([...todoList])
    const localStorageSetTodoList: IToDoListData = {
      data: todoList
    }
    LocalStorage('set', localStorageSetTodoList)
    setShowInput(false)
    setTodoText('')
    setShowOkButton('')
  }

  const cancel = () => {
    setShowInput(false)
    setTodoText('')
    setShowOkButton('')
  }

  const deleteTodo = (id: number) => {    
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        todoList.splice(i, 1)
      }
    }
    setTodoList([...todoList])
    const localStorageSetTodoList: IToDoListData = {
      data: todoList
    }
    LocalStorage('set', localStorageSetTodoList)
  }

  return (
    <div className='list'>
      {showInput ? (
        <div className='add'>
          <div className='add-time-area'>
            <span>{moment(todoTime).format('hh:mm A')}</span>
            <div className='buttons'>
              <div className='ok-button' style={{opacity: showOkButton}} onClick={addTodo}>{i18n().addText}</div>
              <div className='cancel-button' onClick={cancel}>{i18n().cancelText}</div>
            </div>
          </div>
          <textarea className='add-item-text' rows={4} onKeyUp={(e) => onKeyUp(e)}></textarea>
        </div>
      ) : null}
      {
        todoList.map((item, index) => {
          return (
            <Item key={index} text={item.text} id={item.id} setOk={complete} deleteTodo={deleteTodo} getOk={{
              ok: item.ok,
              style: getOkStyle(item.ok)
            }} />
          )
        })
      }
    </div>
  );
}

export default List;