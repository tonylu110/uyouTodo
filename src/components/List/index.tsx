import React, {FC, useState} from 'react';
import './style.scss';
import Item from "./Item";
import IProps from "./IProps";
import LocalStorage from "../../util/LocalStorage";
import FirstLoad from "../../util/FirstLoad";
import ITodoList from "../../interface/ITodoListArray";
import IToDoListData from "../../interface/IToDoListData";
import moment from "moment";

const List: FC<IProps> = ({
  showInput,
  setShowInput,
}) => {
  FirstLoad()
  const localStorageTodoList: ITodoList[] = LocalStorage('get')!
  const [todoList, setTodoList] = useState(localStorageTodoList)
  const [showOkButton, setShowOkButton] = useState('')

  const complete = (id: number, isOk: boolean) => {
    todoList[id].ok = isOk
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
  }

  const cancel = () => {
    setShowInput(false)
  }

  return (
    <div className='list'>
      {showInput ? (
        <div className='add'>
          <div className='add-time-area'>
            <span>{moment(new Date().getTime()).format('hh:mm A')}</span>
            <div className='buttons'>
              <div className='ok-button' style={{opacity: showOkButton}}>添加</div>
              <div className='cancel-button' onClick={cancel}>取消</div>
            </div>
          </div>
          <textarea className='add-item-text' rows={4} onKeyUp={(e) => onKeyUp(e)}></textarea>
        </div>
      ) : null}
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