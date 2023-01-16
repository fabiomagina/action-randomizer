import React, { useState } from "react";
import "./GenerateAction.css"
import PageView from "../components/templates/PageView";
import { sendAction } from "../funcs/axios";
import generateAction from "../funcs/generateAction";

export default function GenerateAction() {
    const [numberOfActions, setNumberOfActions] = useState(0)
    const [counter, setCounter] = useState(0)
    const [actions, setActions] = useState([])
    const [saveType, setSaveType] = useState(0)

    function reloadCounter(newCounter) {
        setCounter(newCounter)
    }

    function renderResults(results) {
        setActions(results)

    }
    function clear() {
        setNumberOfActions(0)
        setActions('')
    }

    return (
        <PageView reload={counter}>
            <div className="pageview row">
                <div className="results-view">
                    <div className="results__template">
                        <div className="row row__number-actions">
                            <label>Number of Actions:</label>
                            <input className="n-input" name="numberOfActions" type="number" value={numberOfActions}
                                onChange={e => setNumberOfActions(e.target.value)} />
                        </div>

                        <div className="btn__row">

                            <button className="btn btn__clear" onClick={
                                () => clear()}>
                                clear generated actions</button>
                            <button className="btn btn__generate" onClick={
                                () => generateAction(renderResults)}>
                                Generate Actions</button>
                        </div>
                        <div className="result__row">
                            <textarea cols="50" rows="13" id="results" name="action" type="text" value={actions}
                                onChange={e => setActions(e)} />
                        </div>
                        <div className="row row__save">
                            <div className="row__label--input">
                                <label>Save type:</label>
                            <input className="n-input" name="saveType" type="number" value={saveType}
                                onChange={e => setSaveType(e.target.value)} />
                                </div>
                            <button className="btn btn__save" onClick={
                                () => sendAction(saveType, actions, clear, reloadCounter)}>
                                Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageView>
    )
}

