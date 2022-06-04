import IGetOkStyle from "../../../interface/IGetOkStyle"

interface IProps {
  text: string
  id: number
  getOk: IGetOkStyle
  setOk: (id: number, isOk: boolean) => void
  deleteTodo: (id: number) => void
}

export default IProps