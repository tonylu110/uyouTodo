import { FC } from 'react';
import IProps from "./IProps";
import './style.scss'
import plusImg from '../../images/plus.png'
import settingImg from '../../images/setting.png'

const Title: FC<IProps> = ({
  setShowInput,
  setElement,
  titleText
}) => {

  return (
    <div className='title-bar'>
      <img className='setting-icon' src={settingImg} alt='' onClick={() => setElement()} />
      <span>{titleText}</span>
      <img className='plus-icon' src={plusImg} alt='' onClick={() => setShowInput!(true)} />
    </div>
  );
}

export default Title;