import { useContext } from "react"
import { ActionsContext } from "../../../controllers/context/Actions"
import { deleteType } from "../../../controllers/axios"
import ModalTemplate from "../ModalTemplate"

const DeleteActionsModal = () => {
    const { type, setReload } = useContext(ActionsContext)

    const modal__main =
        <h2>
            Deletar Macro Tipo <strong>{type.title}</strong>?
        </h2>
    return <ModalTemplate modalTitle={'Delete Macro Type  :'} btnDesc="Delete"
        modalStyle='modal__type--delete' modal__main={modal__main}
        callback={() => deleteType(type.id, setReload)} />
}

export default DeleteActionsModal