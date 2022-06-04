import React, {FC} from 'react';
import IProps from "./IProps";
import './style.scss'
import plusImg from '../../images/plus.png'

const Title: FC<IProps> = ({
  setShowInput
}) => {
  const set = (showInput: boolean) => {
    setShowInput(showInput)
  }

  return (
    <div className='title-bar'>
      <span>uyou ToDo</span>
      <img src={plusImg} alt='' onClick={() => set(true)} />
    </div>
  );
}

export default Title;