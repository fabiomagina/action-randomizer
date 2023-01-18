import "./MacroConfig.css"
import { useState, useEffect } from 'react'
import PageView from "../components/templates/PageView";
import { getTypes } from "../funcs/axios";
import { AiOutlineClear, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Modal from "../components/Modal";

export default function MacroConfig() {
    const [types, setTypes] = useState([])
    const [typeId, setTypeId] = useState('')
    const [typeTitle, setTypeTitle] = useState('?')

    const modalFocus = document.querySelector('.modal--focus')

    useEffect(() => {
        getTypes(setTypes)
    }, [])

    useEffect(() => {
    }, [types])

    function showStatus(status, id) {
        if (status) return <p className="status--active">ON</p>
        else return <p className="status--inactive">OFF</p>
    }

    function clearType() {
        setTypeId('?')
        setTypeTitle('')
    }

    function deleteType(id) {
    }

    function openModal(type = '', modalStyle = '.modal__type--edit') {
        const modal = document.querySelector(modalStyle)
        modal.setAttribute('style', 'display: block')
        modalFocus.setAttribute('style', 'display: block')
        if (modalStyle === '.modal__type--new') clearType()
        else setEditType(type)
    }
    
    function setEditType(type) {
        setTypeId(type.id)
        setTypeTitle(type.title)
    }

    function renderEditPage() {
        const modal__main = <><label>Id:</label>
        <input type="text" className="n-input" value={typeId} readOnly />
        <label>Title:</label>
        <input type="text" onChange={(e) => setTypeTitle(e.target.value)} value={typeTitle} /></>
        return <Modal modalTitle={'Edit Macro Type  :'} btnDesc="Edit" modalStyle='modal__type--edit' modal__main={modal__main}/>
    }

    function renderNewTypePage() {
        const modal__main = 
                <><label>Id:</label>
                <input type="text" className="n-input" value={typeId} readOnly />
                <label>Title:</label>
                <input type="text" onChange={(e) => setTypeTitle(e.target.value)} value={typeTitle} /></>

        return <Modal modalTitle={'New Macro Type:'} btnDesc="Create" modalStyle='modal__type--new' newTypeModal modal__main={modal__main} />
    }

    function renderType(type) {
        return (
            <tr key={type.id}>
                <td>{type.id}</td>
                <td className="td__title"> {type.title}</td>
                <td>{showStatus(type.status)}</td>
                <td className="td__operations">

                    <button id={type.id} onClick={
                        () => openModal(type)}>
                        <AiFillEdit /> </button>
                    <button id={type.id} onClick={
                        () => openModal(type)}
                    > <AiOutlineClear />
                    </button>
                    <button id={type.id} onClick={
                        () => deleteType(type)}
                    ><AiFillDelete /></button>
                </td>
            </tr >
        )}

    return (

        <PageView title="MACRO CONFIG">
            <div className="config__template">
                {renderEditPage()}
                {renderNewTypePage()}

                <div className="row__table">
                    <div className="row__table-desc">

                    <p>Selecione os tipos de macros a serem randomizados.</p>
                    <p>Para mudar o status clique em ON/OFF.</p>
                    </div>
                    <table className="table__types">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {types.map(type => renderType(type))}
                        </tbody>
                    </table>
                </div>

                <div className="row__btn">
                    <button className="btn btn__save" onClick={
                        () => openModal('', '.modal__type--new')} >
                        New Type</button>
                    
                    <Link to="/generate_action"><button className="btn btn__clear">Generate Macro</button></Link>
                </div>
            </div>

        </PageView>
    )
}


