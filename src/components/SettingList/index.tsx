import { useState } from 'react'
import './style.scss'
import langImg from '../../images/lang.png'
import LangSet from './LangSet'
import titleImg from '../../../todo_list.png'

const SettingList = () => {
  const [langMenuShow, setLangMenuShow] = useState(false)

  return (
    <div className='setting-list'>
      <div className='title-img'>
        <img src={titleImg} alt="" />
        <span>uyou ToDo v1.0.2</span>
      </div>
      <div className='setting-item lang-set' onClick={() => setLangMenuShow(true)}>
        <img src={langImg} alt="" className='lang-img' />
      </div>
      {langMenuShow ? <LangSet setShowLangMenu={() => setLangMenuShow(false)} /> : null}
      {langMenuShow ? <div className='black-back' onClick={() => setLangMenuShow(false)}></div> : null}
    </div>
  )
}

export default SettingList