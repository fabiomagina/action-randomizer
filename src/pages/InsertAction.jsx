import React, { useState } from "react";
import "./InsertAction.css"
import { sendAction, getTypes } from "../funcs/axios";
import PageView from "../components/templates/PageView";
import { useEffect } from "react";

export default function InsertAction(props) {
    const [types, setTypes] = useState([])
    const [typeIndex, setTypeIndex] = useState(1)
    const [action, setAction] = useState('')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        getTypes(setTypes)
    }, [])

    function reloadCounter(newCounter) {
        setCounter(newCounter)
    }

    function updateAction(e) {
        const newAction = e.target.value
        setAction(newAction)
    }

    function clear() {
        setAction('')
    }
    function clearAction() {
        setAction('')
    }

    return (
        <PageView title={'INSERT ACTIONS'} reload={counter}>

            <div className="insert__template">
                <div className="row row__type">
                    <label>Action Type:</label>
                    <select name="select" onChange={e => setTypeIndex(e.target.value)} >
                        {types.map((type) =>
                            <option key={type.id} className="max-width"
                                value={type.id}>{type.title}</option>)}
                    </select>
                </div>
                <div className="row__textarea">
                    <label>Script: </label>
                    <textarea cols="50" rows="13" id="action" name="action" type="text" value={action}
                        onChange={e => updateAction(e)} />
                </div>
                <div className="row__btn row__save">
                    <button className="btn btn__clear" onClick={
                        () => clear()}>
                        clear</button>
                    <button className="btn btn__save" onClick={
                        () => sendAction(typeIndex, action, clearAction, reloadCounter)}>
                        Send</button>

                </div>
            </div>
        </PageView>
    )
}




