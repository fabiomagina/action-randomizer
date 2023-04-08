import { useContext } from "react"
import { clearActionsFromType } from "../../../controllers/axios"
import { ActionsContext } from "../../../controllers/context/Actions"
import ModalTemplate from "../ModalTemplate"

const ClearActionsModal = () => {
    const { type, setReload } = useContext(ActionsContext)

    const modal__main =
        <h2>
            Limpar macros do tipo <strong>{type.title}</strong>?
        </h2>

    return <ModalTemplate modalTitle={'Clear Macro Type  :'} btnDesc="Clear"
        modalStyle='modal__type--clear' modal__main={modal__main}
        callback={() => clearActionsFromType(type.id, setReload)} />
}

export default ClearActionsModal