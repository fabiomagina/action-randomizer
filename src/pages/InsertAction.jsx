import React, { useState } from "react";
import "./InsertAction.css"
import { sendAction } from "../funcs/axios";
import PageView from "../components/templates/PageView";
import { useEffect } from "react";


export default function InsertAction(props) {
    const [actionIndex, setActionIndex] = useState(0)
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
        <PageView title={'Insert Actions'} reload={counter}>

            <div className="insert_template">
                <div className="row row__type">
                    <label>Type:</label>
                    <input className="n-input" name="number" type="number" value={actionIndex}
                        onChange={e => updateActionIndex(e)} />
                </div>
                <div className="row__script">
                    <label>Script: </label>
                    <textarea cols="35" rows="12" id="action" name="action" type="text" value={action}
                        onChange={e => updateAction(e)} />
                </div>
                <div className="row__btn">
                    <button className="run-btn" onClick={
                        () => clear()}>
                        clear</button>
                    <button className="run-btn" onClick={
                        () => sendAction(actionIndex, action, clearAction, reloadCounter)}>
                        Add</button>

                </div>
            </div>
        </PageView>
    )
}


