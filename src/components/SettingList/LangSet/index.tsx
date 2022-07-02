import { FC } from 'react'
import IProps from './IProps'
import './style.scss'

const LangSet: FC<IProps> = ({
  setShowLangMenu
}) => {
  const menuClick = (lang: string) => {
    setShowLangMenu()
  }

  return (
    <div className="lang-menu">
      <div onClick={() => menuClick('withSystem')}>跟随系统</div>
      <div onClick={() => menuClick('en')}>English</div>
      <div onClick={() => menuClick('zhCN')}>中文（简体）</div>
      <div onClick={() => menuClick('zhTW')}>中文（繁體）</div>
      <div onClick={() => menuClick('ja')}>日本語</div>
    </div>
  )
}

export default LangSet