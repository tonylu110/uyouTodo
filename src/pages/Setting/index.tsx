import SettingList from "../../components/SettingList"
import Title from "../../components/Title"
import i18n from "../../i18n"
import backImg from '../../images/back.png'

const Setting = (props: any) => {
  return (
    <>
      <Title titleText={i18n().settingTitleText} setElement={() => props.setElement()} LeftImg={backImg} />
      <SettingList />
    </>
  )
}

export default Setting