import cn from "./cn";
import traZh from "./tra-zh";
import en from "./en";
import jp from "./jp";

const i18n = () => {
    let jsSrc: string
    const langIsSet = localStorage.getItem('lang')
    if (langIsSet !== null && langIsSet !== 'withSystem') {
        jsSrc = langIsSet
    } else {
        jsSrc = navigator.language.toLowerCase()
    }
    if (jsSrc.indexOf('zh-cn') != -1) {
        return cn
    } else if (jsSrc == 'zh-tw' || jsSrc == 'zh-hk') {
        return traZh
    } else if (jsSrc.indexOf('ja') != -1) {
        return jp
    } else {
        return en
    }
}

export default i18n