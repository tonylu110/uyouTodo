import React, {FC, useState} from 'react';
import './style.scss'
import closeImg from '../../../images/close.png'
import okImg from '../../../images/ok.png'
import IProps from "./IProps";
import Toast from "../../Toast";
import getTime from './getTime';
import getOkStyle from './getOkStyle';

const Item: FC<IProps> = ({
  text,
  id,
  getOk,
  setOk,
  deleteTodo,
}) => {
  const [okState, setOkState] = useState(getOk.ok)
  const [okStyle, setOkStyle] = useState(getOk.style)
  const [toastState, setToastState] = useState(false)

  const ok = (okState: boolean) => {
    setOkStyle(getOkStyle(okState))
    if (okState) {
      setOkState(true)
      setOk(id, true)
    } else {
      setOkState(false)
      setOk(id, false)
    }
  }

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      setToastState(true)
      setTimeout(() => {
        setToastState(false)
      }, 1000)
    })
  }

  const del = (id: number) => {
    deleteTodo(id)
  }

  return (
    <div className='list-item'>
      <div className='time-area'>
        <span>{getTime(id)}</span>
        <div onClick={copyText}>复制</div>
      </div>
      <span className='item-text' style={okStyle}>
        {text}
      </span>
      <div className='close-button' onClick={() => del(id)}>
        <img src={closeImg} alt='' />
      </div>
      <div className='ok-button' onClick={() => ok(!okState)}>
        <img src={okImg} alt='' />
      </div>
      {toastState ? <Toast msg='复制成功' /> : null}
    </div>
  );
}

export default Item;