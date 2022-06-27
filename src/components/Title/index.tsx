import { FC } from 'react';
import IProps from "./IProps";
import './style.scss'
import plusImg from '../../images/plus.png'
import settingImg from '../../images/setting.png'

const Title: FC<IProps> = ({
  setShowInput,
  setElement
}) => {
  const set = (showInput: boolean) => {
    setShowInput(showInput)
  }

  return (
    <div className='title-bar'>
      <img className='setting-icon' src={settingImg} alt='' onClick={() => setElement(1)} />
      <span>uyou ToDo</span>
      <img className='plus-icon' src={plusImg} alt='' onClick={() => set(true)} />
    </div>
  );
}

export default Title;