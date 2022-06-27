import './style.scss'
import langImg from '../../images/lang.png'

const SettingList = () => {
  return (
    <div className='setting-list'>
      <div className='setting-item lang-set'>
        <img src={langImg} alt="" className='lang-img' />
      </div>
    </div>
  )
}

export default SettingList