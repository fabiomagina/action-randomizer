import React, { useState, useEffect } from "react";
import "./MacroConfig.css"
import PageView from "../components/templates/PageView";
import { getTypes } from "../funcs/axios";
import { AiOutlineClear, AiFillDelete, AiFillEdit } from "react-icons/ai";



export default function MacroConfig(props) {
    const [types, setTypes] = useState([])
    const [typeId, setTypeId] = useState(0)
    const [typeTitle, setTypeTitle] = useState('')


    useEffect(() => {
        getTypes(setTypes)
    }, [])

    useEffect(() => {
        console.log(types)
    }, [types])

    function showStatus(status, id) {
        if (status) return <p className="status--active">ON</p>
        else return <p className="status--inactive">OFF</p>
    }

    function editType(type) {
        setTypeId(type.id)
        setTypeTitle(type.title)
    }
    function clearType(id) {
        console.log(id)
    }
    function deleteType(id) {
        console.log(id)
    }

    function closeModal() {
        const modal = document.querySelector('.modal')
        modal.setAttribute('style', 'display: none')
    }

    function openModal() {
        const modal = document.querySelector('.modal')
        modal.setAttribute('style', 'display: block')
    }

    function renderEditPage(id) {
        return (
            <div className="modal">

                <div className="row__modal--title">
                    <h2>Editar Tipo:</h2>
                    <button className="btn__close" onClick={() => closeModal()}>X</button>

                </div>
                <div className="row__modal--inputs">
                    <label>Id:</label>
                    <input type="text" className="n-input" value={typeId} readOnly />
                    <label>Title:</label>
                    <input type="text" onChange={(e) => setTypeTitle(e.target.value)} value={typeTitle} />
                </div>
                <div className="row__btn">
                    <button className="btn btn__save">Salvar</button>
                </div>

            </div>
        )
    }

    function renderType(type) {
        return (
            <tr key={type.id}>
                <td>{type.id}</td>
                <td className="td__title"> {type.title}</td>
                <td>{showStatus(type.status)}</td>
                <td className="td__operations">
                    <button id={type.id} onClick={(e) => {
                        openModal(type)
                        editType(type)
                    }}><AiFillEdit /></button>
                    <button id={type.id} > <AiOutlineClear /></button>
                <button id={type.id} onClick={(e) => deleteType(type)}><AiFillDelete /></button>
            </td>
            </tr >
        )
    }


    return (
        <PageView title="MACRO CONFIG">

            <div className="config__template">
                {renderEditPage()}

                <div className="row__table">
                    <p>Selecione os tipos de macros a serem randomizados.</p>
                    <p>Para mudar o status clique em ON/OFF.</p>
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
                        () => window.open("mailto:fabiomagina@gmail.com")} >
                        New Type</button>
                </div>
            </div>



        </PageView>
    )
}


