import React, {FC, useEffect, useState} from 'react';
import './style.scss'

interface IProps {
  msg: string
}

const Toast: FC<IProps> = ({
  msg
}) => {

  return (
    <div className='toast'>
      {msg}
    </div>
  );
}

export default Toast;