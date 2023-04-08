import { useContext } from "react"
import { ActionsContext } from "../../../controllers/context/Actions"
import { postNewType } from "../../../controllers/axios"
import ModalTemplate from "../ModalTemplate"

const NewTypeModal = () => {
    const { type, setType, setReload } = useContext(ActionsContext)

    const modal__main =
        <div className="modal__newType--main">

            <div className="row">
                <label>Title:</label>
                <input type="text" id="modal__type--new--input--title" maxLength={14} onChange={
                    (e) => setType({ ...type, title: e.target.value })}
                    value={type.title} />
            </div>

            <div className="row">
                <label>nLoops: </label>
                <input type="number" id="modal__type--new--input--n-loops" className="n-input" maxLength={14} onChange={
                    (e) => setType({ ...type, n_loops: e.target.value })}
                    value={type.n_loops} />
            </div>

            <div className="row">
                <label>Rand Pos: </label>
                {handlePosStatusModal(type, setType)}
            </div>
        </div>

    function handlePosStatusModal(type) {
        let newType = { ...type }
        newType.rand_pos = !type.rand_pos
        if (type.rand_pos === false) {
            return <button onClick={() => setType({ ...newType })}
                className="btn__status btn__status--inactive">OFF</button>
        }
        else return <button onClick={() => setType({ ...newType })}
            className="btn__status btn__status--active">ON</button>
    }

    return <ModalTemplate modalTitle={'New Macro Type:'} btnDesc="Create"
        modalStyle='modal__type--new' newTypeModal modal__main={modal__main}
        callback={() => {
            postNewType(type.title, type.rand_pos, type.n_loops)
            setReload(1)
        }} />
}

export default NewTypeModal