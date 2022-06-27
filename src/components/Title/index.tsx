import { FC, useState } from 'react';
import IProps from "./IProps";
import './style.scss'
import plusImg from '../../images/plus.png'
import settingImg from '../../images/setting.png'

const Title: FC<IProps> = ({
  setShowInput,
  setElement,
  titleText,
  LeftImg
}) => {

  const leftImage = LeftImg === undefined ? settingImg : LeftImg

  return (
    <div className='title-bar'>
      <img className='setting-icon' src={leftImage} alt='' onClick={() => setElement()} />
      <span>{titleText}</span>
      {
        LeftImg === undefined ? <img className='plus-icon' src={plusImg} alt='' onClick={() => setShowInput!(true)} /> : null
      }
    </div>
  );
}

export default Title;