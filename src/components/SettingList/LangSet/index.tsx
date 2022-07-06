import { FC } from 'react'
import i18n from '../../../i18n'
import IProps from './IProps'
import './style.scss'

const LangSet: FC<IProps> = ({
  setShowLangMenu
}) => {
  const menuClick = (lang: string) => {
    setShowLangMenu()
    localStorage.setItem('lang', lang)
    location.reload()
  }

  return (
    <div className="lang-menu">
      <div onClick={() => menuClick('withSystem')}>{i18n().setLangText}</div>
      <div onClick={() => menuClick('en')}>English</div>
      <div onClick={() => menuClick('es')}>Español</div>
      <div onClick={() => menuClick('zh-cn')}>中文（简体）</div>
      <div onClick={() => menuClick('zh-tw')}>中文（繁體）</div>
      <div onClick={() => menuClick('ja')}>日本語</div>
    </div>
  )
}

export default LangSet