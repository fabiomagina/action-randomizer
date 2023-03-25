import {
    saveTypeChanges, postNewType,
    deleteType, clearActionsFromType
} from './axios'
import Modal from "../components/Modal"

export function renderModals(type, setType, setReload) {
    return <>
        {renderEditModal(type, setType, setReload)}
        {renderClearActionsModal(type, setReload)}
        {renderDeleteActionsModal(type, setReload)}
        {renderNewTypeModal(type, setType, setReload)}
    </>
}

export function openModal(type, modalStyle, setType) {
    const modal = document.querySelector(modalStyle)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: flex')
    modalFocus.setAttribute('style', 'display: flex')
    console.log(modalStyle === '.modal__type--new')
    setType(type)
}

export function closeModal(modalTypeStyle) {
    const modal = document.querySelector(`.${modalTypeStyle}`)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: none')
    modalFocus.setAttribute('style', 'display: none')
}

export function clearType(setType, setReload) {
    setType({
        id: '?', title: '',
        run: false, rand_pos: false, n_loops: 1, chance: 100, length: 1, start: false, end: false
    })
    setReload(0)
}
export function renderEditModal(type, setType, setReload) {
    const modal__main = <>
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
    return <Modal modalTitle={'Edit Macro Type  :'} btnDesc="Save"
        modalStyle='modal__type--edit' modal__main={modal__main} callback={
            () => saveTypeChanges(type.id, type.title, type.n_loops, type.chance, setReload)} />
}

export function renderClearActionsModal(type, setReload) {
    const modal__main =
        <h2>
            Limpar macros do tipo <strong>{type.title}</strong>?
        </h2>
    return <Modal modalTitle={'Clear Macro Type  :'} btnDesc="Clear"
        modalStyle='modal__type--clear' modal__main={modal__main}
        callback={() => clearActionsFromType(type.id, setReload)} />
}

export function renderDeleteActionsModal(type, setReload) {
    const modal__main =
        <h2>
            Deletar Macro Tipo <strong>{type.title}</strong>?
        </h2>
    return <Modal modalTitle={'Delete Macro Type  :'} btnDesc="Delete"
        modalStyle='modal__type--delete' modal__main={modal__main}
        callback={() => deleteType(type.id, setReload)} />
}

export function renderNewTypeModal(type, setType, setReload) {
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

    return <Modal modalTitle={'New Macro Type:'} btnDesc="Create"
        modalStyle='modal__type--new' newTypeModal modal__main={modal__main}
        callback={() => {
            postNewType(type.title, type.rand_pos, type.n_loops)
            setReload(1)
        }} />
}

function handlePosStatusModal(type, setType) {
    let newType = { ...type }
    newType.rand_pos = !type.rand_pos
    if (type.rand_pos === false) {
        return <button onClick={() => setType({ ...newType })}
            className="btn__status btn__status--inactive">OFF</button>
    }
    else return <button onClick={() => setType({ ...newType })}
        className="btn__status btn__status--active">ON</button>
}
