import FirstLoadData from "../data/FirstLoadData";
import LocalStorage from "./LocalStorage";

const FirstLoad = () => {
  const firstToDo = {
    data: FirstLoadData()
  }
  if (localStorage.getItem('ToDo') === null) {
    LocalStorage('set', firstToDo)
  }
}

export default FirstLoad;