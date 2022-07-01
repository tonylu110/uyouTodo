import './style.scss'
import langImg from '../../images/lang.png'
import LangSet from './LangSet'
import { useState } from 'react'

const SettingList = () => {
  const [langMenuShow, setLangMenuShow] = useState(false)

  return (
    <div className='setting-list'>
      <div className='setting-item lang-set' onClick={() => setLangMenuShow(true)}>
        <img src={langImg} alt="" className='lang-img' />
      </div>
      {langMenuShow ? <LangSet /> : null}
      {langMenuShow ? <div className='black-back' onClick={() => setLangMenuShow(false)}></div> : null}
    </div>
  )
}

export default SettingList