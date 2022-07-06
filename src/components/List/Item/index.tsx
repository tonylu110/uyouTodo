import { FC, useEffect, useState } from 'react';
import './style.scss'
import deleteImg from '../../../images/delete.png'
import okImg from '../../../images/ok.png'
import IProps from "./IProps";
import Toast from "../../Toast";
import getTime from './getTime';
import getOkStyle from './getOkStyle';
import i18n from '../../../i18n';
import copyImg from '../../../images/copy.png'

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

  useEffect(() => {
    setOkState(getOk.ok)
    setOkStyle(getOk.style)
  }, [getOk])

  return (
    <div className='list-item'>
      <div className='time-area'>
        <span>{getTime(id)}</span>
        <div title={i18n().copyText} onClick={copyText}><img src={copyImg} alt="" /></div>
      </div>
      <span className='item-text' style={okStyle}>
        {text}
      </span>
      <div className='close-button' onClick={() => del(id)}>
        <img src={deleteImg} alt='' />
      </div>
      <div className='ok-button' onClick={() => ok(!okState)}>
        <img src={okImg} alt='' />
      </div>
      {toastState ? <Toast msg={i18n().copyToast} /> : null}
    </div>
  );
}

export default Item;