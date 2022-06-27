import Title from "../../components/Title"
import i18n from "../../i18n"

const Setting = (props: any) => {
  return (
    <>
      <Title titleText={i18n().settingTitleText} setElement={() => props.setElement()} />
    </>
  )
}

export default Setting