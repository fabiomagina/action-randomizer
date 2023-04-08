import { useContext } from "react"
import { ActionsContext } from "../../../controllers/context/Actions"
import ModalTemplate from "../ModalTemplate"
import { saveTypeChanges } from "../../../controllers/axios"

const EditModal = () => {
    const { type, setType, setReload } = useContext(ActionsContext)

    const modal__main =
        <>
            <div className="row">
                <label>Id:</label>
                <input type="text" id="modal__type--edit--input--id"
                    className="n-input" value={type.id} readOnly />
                <label>nLoops:</label>
                <input type="number" id="modal__type--edit--input--n-loops"
                    className="n-input input__n--loops" onChange={
                        (e) => setType({ ...type, n_loops: e.target.value })} value={type.n_loops} />
            </div>
            <div className="row">
                <label>Title:</label>
                <input type="text" name="modal__config--input--title" maxLength={14} onChange={
                    (e) => setType({ ...type, title: e.target.value })}
                    value={type.title} />
            </div>
            <div className="row">
                <label>Chances (%):</label>
                <input type="number" id="modal__type--edit--input--n-chances"
                    className="n-input input__n--chances" onChange={
                        (e) => setType({ ...type, chance: e.target.value })} value={type.chance} />
            </div>
        </>
    return <ModalTemplate modalTitle={'Edit Macro Type  :'} btnDesc="Save"
        modalStyle='modal__type--edit' modal__main={modal__main} callback={
            () => saveTypeChanges(type.id, type.title, type.n_loops, type.chance, setReload)} />
}

export default EditModal