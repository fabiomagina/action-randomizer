import "./MacroConfig.css"
import { useState, useEffect } from 'react'
import PageView from "../components/templates/PageView";
import { getTypes, saveTypeChanges, postNewType, deleteType, setStatus, clearActionsFromType } from "../funcs/axios";
import { AiOutlineClear, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Modal from "../components/Modal";

export default function MacroConfig() {
    const [types, setTypes] = useState([])
    const [type, setType] = useState({ id: '?', title: '', status: false, pos_status: false, n_loops: 1 })
    const [reload, setReload] = useState(false)

    const modalFocus = document.querySelector('.modal--focus')

    useEffect(() => {
        getTypes(setTypes)
    }, [])

    useEffect(() => {
        getTypes(setTypes)
        clearType()
    }, [reload])

    function showStatus(typeId, status) {
        if (status) return <button onClick={() => setStatus(typeId, 'status', !status, setTypes)}
            className="btn__status btn__status--active">ON</button>
        else return <button onClick={() => setStatus(typeId, 'status', !status, setTypes)}
            className="btn__status btn__status--inactive">OFF</button>
    }

    function handlePosStatus() {
        let newType = { ...type }
        newType.pos_status = !type.pos_status
        if (type.pos_status === false) {
            return <button onClick={() => setType({ ...newType })}
                className="btn__status btn__status--inactive">OFF</button>
        }
        else return <button onClick={() => setType({ ...newType })}
            className="btn__status btn__status--active">ON</button>
    }

    function showRandPosStatus(typeId, status) {
        if (status) return <button onClick={() => setStatus(typeId, 'pos_status', !status, setTypes)}
            className="btn__status btn__status--active">ON</button>
        else return <button onClick={() => setStatus(typeId, 'pos_status', !status, setTypes)}
            className="btn__status btn__status--inactive">OFF</button>
    }

    function clearType() {
        setType({ id: '?', title: '', status: false, pos_status: false, n_loops: 1 })
        setReload(0)
    }


    function openModal(type = '', modalStyle = '.modal__type--edit') {
        const modal = document.querySelector(modalStyle)
        modal.setAttribute('style', 'display: block')
        modalFocus.setAttribute('style', 'display: block')
        if (modalStyle === '.modal__type--new') clearType()
        else setType(type)
    }

    function renderTypesTable() {
        if (types.length !== 0) return (
            <table className="table__types">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>loops</th>
                        <th>Status</th>
                        <th>randPos</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {types.map(type => renderType(type))}
                </tbody>
            </table>
        )
    }

    function renderType(type) {
        return (
            <tr key={type.id}>
                <td>{type.id}</td>
                <td className="td__title"> {type.title}</td>
                <td className="td__loops">{type.n_loops}</td>
                <td>{showStatus(type.id, type.status)}</td>
                <td>{showRandPosStatus(type.id, type.pos_status)}</td>

                <td className="td__operations">
                    <button id={type.id} onClick={
                        () => openModal(type)}>
                        <AiFillEdit /> </button>
                    <button id={type.id} onClick={
                        () => openModal(type, '.modal__type--clear')}
                    > <AiOutlineClear />
                    </button>
                    <button id={type.id} onClick={
                        () => openModal(type, '.modal__type--delete')}
                    ><AiFillDelete /></button>
                </td>
            </tr >
        )
    }

    function renderEditModal() {
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
        </>
        return <Modal modalTitle={'Edit Macro Type  :'} btnDesc="Save"
            modalStyle='modal__type--edit' modal__main={modal__main} callback={
                () => saveTypeChanges(type.id, type.title, type.n_loops, setReload)} />
    }

    function renderClearActionsModal() {
        const modal__main =
            <h2>
                Limpar macros do tipo <strong>{type.title}</strong>?
            </h2>
        return <Modal modalTitle={'Clear Macro Type  :'} btnDesc="Clear"
            modalStyle='modal__type--clear' modal__main={modal__main}
            callback={() => clearActionsFromType(type.id, setReload)} />
    }

    function renderDeleteActionsModal() {
        const modal__main =
            <h2>
                Deletar Macro Tipo <strong>{type.title}</strong>?
            </h2>
        return <Modal modalTitle={'Delete Macro Type  :'} btnDesc="Delete"
            modalStyle='modal__type--delete' modal__main={modal__main}
            callback={() => deleteType(type.id, setReload)} />
    }

    function renderNewTypeModal() {
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
                    {handlePosStatus()}
                </div>
            </div>

        return <Modal modalTitle={'New Macro Type:'} btnDesc="Create"
            modalStyle='modal__type--new' newTypeModal modal__main={modal__main}
            callback={() => {
                postNewType(type.title, type.pos_status, type.n_loops)
                setReload(1)
            }} />
    }

    return (

        <PageView title="MACRO CONFIG" reload={reload}>
            <div className="config__template">
                {renderEditModal()}
                {renderClearActionsModal()}
                {renderDeleteActionsModal()}
                {renderNewTypeModal()}

                <div className="row__table-desc">

                    <p>Selecione os tipos de macros a serem randomizados.</p>
                    <p>Para mudar o status clique em ON/OFF.</p>
                </div>
                <div className="row__table">

                    {renderTypesTable()}

                </div>

                <div className="row__btn">
                    <button className="btn btn__save" onClick={
                        () => openModal('', '.modal__type--new')} >
                        New Type</button>

                    <Link to="/generate_action">
                        <button className="btn btn__clear">Generate Macro</button></Link>
                </div>
            </div >

        </PageView >
    )
}


