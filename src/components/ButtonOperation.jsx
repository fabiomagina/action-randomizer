import { useContext } from "react";
import { AiOutlineClear, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ActionsContext } from "../controllers/context/Actions";
import { openModal } from "../controllers/modal-controller";
import './ButtonOperations.css'

export default function ButtonOperation({ type, modalType }) {
    const { setType, setReload } = useContext(ActionsContext)    

    const modalTypes = {
        edit: {
            svg: <AiFillEdit />,
            style: ".modal__type--edit"
        },
        clear: {
            svg: <AiOutlineClear/>,
            style: ".modal__type--clear"
        } ,
        delete: {
            svg: <AiFillDelete />,
            style: ".modal__type--delete"
        }
    }

    return <button className="btn__operations" id={type.id} onClick={
        () => openModal(type, modalTypes[modalType].style, setType, setReload)}>
        {modalTypes[modalType].svg} </button>


}