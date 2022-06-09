import ITodoList from "../../interface/ITodoListArray";
import cn from "./cn";
import en from "./en";

const FirstLoadData = (): ITodoList[] => {
    var jsSrc = navigator.language.toLowerCase();
    if (jsSrc.indexOf('zh') != -1) {
        return cn
    }
    else {
        return en
    }
}

export default FirstLoadData