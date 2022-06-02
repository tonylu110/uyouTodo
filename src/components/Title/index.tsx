import React, {FC} from 'react';
import IProps from "./IProps";
import './style.scss'
import plusImg from '../../images/plus.png'

const Title: FC<IProps> = ({

}) => {
  return (
    <div className='title-bar'>
      <span>uyou ToDo</span>
      <img src={plusImg} alt='' />
    </div>
  );
}

export default Title;