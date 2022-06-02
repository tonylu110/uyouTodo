import React, {FC, useState} from 'react';
import './style.scss'

import closeImg from '../../../images/close.png'
import okImg from '../../../images/ok.png'
import IProps from "./IProps";
import moment from "moment";
import Toast from "../../Toast";

const Item: FC<IProps> = ({
  index,
  text,
  id,
  setOk
}) => {
  const [okStyle, setOkStyle] = useState({
    textDecoration: '',
    color: ''
  })
  const [okState, setOkState] = useState(false)
  const [toastState, setToastState] = useState(false)

  const ok = (okState: boolean) => {
    if (okState) {
      setOkStyle({
        textDecoration: 'line-through',
        color: '#cebfae'
      })
      setOkState(true)
      setOk(index, true)
    } else {
      setOkStyle({
        textDecoration: '',
        color: ''
      })
      setOkState(false)
      setOk(index, false)
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

  return (
    <div className='list-item'>
      <div className='time-area'>
        <span>{moment(id).format("YYYY-MM-DD")}</span>
        <div onClick={copyText}>复制</div>
      </div>
      <span className='item-text' style={okStyle}>
        {text}
      </span>
      <div className='close-button'>
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