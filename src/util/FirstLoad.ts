import LocalStorage from "./LocalStorage";

const FirstLoad = () => {
  const firstToDo = {
    data:[
      {
        text: '欢迎使用 uyou ToDo',
        id: new Date().getTime(),
        ok: false
      },
      {
        text: '将鼠标移至左上角，完成 ToDo',
        id: new Date().getTime() + 1,
        ok: false
      },
      {
        text: '将鼠标移至右上角，删除 ToDo',
        id: new Date().getTime() + 3,
        ok: false
      },
      {
        text: '将鼠标移至 ToDo 标题栏右上角，复制 ToDo 内容',
        id: new Date().getTime() + 4,
        ok: false
      }
    ]
  }
  if (localStorage.getItem('ToDo') === null) {
    LocalStorage('set', firstToDo)
  }
}

export default FirstLoad;