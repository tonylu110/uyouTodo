import i18n from "../i18n";
import LocalStorage from "./LocalStorage";

const FirstLoad = () => {
  const firstToDo = {
    data: i18n().firstLoadData
  }
  if (localStorage.getItem('ToDo') === null) {
    LocalStorage('set', firstToDo)
  }
}

export default FirstLoad;