import React, { useState } from "react";
import "./InsertAction.css"
import { sendAction } from "../funcs/axios";
import PageView from "../components/templates/PageView";


export default function InsertAction(props) {
    const [actionIndex, setActionIndex] = useState(0)
    const [action, setAction] = useState('')
    const [counter, setCounter] = useState(0)

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
        <PageView title={'ACTIONS'} reload={counter}>
            <div className="pageview row">
                <div className="add-view">
                    <div className="insert__template">
                        <div className="row type__row">
                            <label>Type:</label>
                            <input className="n-input" name="number" type="number" value={actionIndex}
                                onChange={e => updateActionIndex(e)} />
                        </div>
                        <div className="row">
                            <label>Script: </label>
                            <textarea cols="35" rows="6" id="action" name="action" type="text" value={action}
                                onChange={e => updateAction(e)} />
                        </div>
                        <div className="btn__row">
                            <button className="run-btn" onClick={
                                () => sendAction(actionIndex, action, clear, reloadCounter)}>
                                Add</button>
                        </div>


                    </div>
                </div>
            </div>

        </PageView>
    )
}


