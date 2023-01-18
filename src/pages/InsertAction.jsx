import React, { useState } from "react";
import "./InsertAction.css"
import { sendAction } from "../funcs/axios";
import PageView from "../components/templates/PageView";
import { useEffect } from "react";

export default function InsertAction(props) {
    const [actionIndex, setActionIndex] = useState(1)
    const [action, setAction] = useState('')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
    }
        , [actionIndex])

    function reloadCounter(newCounter) {
        setCounter(newCounter)
    }
    function updateActionIndex(e) {
        const newIndex = +e.target.value
        setActionIndex(newIndex)
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
                    <input className="n-input" name="number" type="number" value={actionIndex}
                        onChange={e => updateActionIndex(e)} />
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
                        () => sendAction(actionIndex, action, clearAction, reloadCounter)}>
                        Send</button>

                </div>
            </div>
        </PageView>
    )
}


