import React, {FC, useEffect, useState} from 'react';
import './style.scss';
import Item from "./Item";
import IProps from "./IProps";
import LocalStorage from "../../util/LocalStorage";
import FirstLoad from "../../util/FirstLoad";
import ITodoList from "../../interface/ITodoListArray";
import IToDoListData from "../../interface/IToDoListData";

const List: FC<IProps> = () => {
  FirstLoad()
  const localStorageTodoList: ITodoList[] = LocalStorage('get')!
  const [todoList, setTodoList] = useState(localStorageTodoList)

  const complete = (id: number, isOk: boolean) => {
    todoList[id].ok = isOk
    setTodoList([...todoList])
    const localStorageSetTodoList: IToDoListData = {
      data: todoList
    }
    LocalStorage('set', localStorageSetTodoList)
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