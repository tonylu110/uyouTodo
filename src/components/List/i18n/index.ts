import cn from "./cn";
import en from "./en";

interface itemType {
    addText: string
    cancelText: string
}

const i18n = (): itemType => {
    var jsSrc = navigator.language.toLowerCase();
    if (jsSrc.indexOf('zh') != -1) {
        return cn
    }
    else {
        return en
    }
}

export default i18n