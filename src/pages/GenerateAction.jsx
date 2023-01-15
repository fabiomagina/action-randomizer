import React, { useState } from "react";
import "./GenerateAction.css"
import PageView from "../components/common/PageView";
import { showResults } from "../funcs/axios";

export default function GenerateAction({ setCounter }) {
    const [numberOfActions, setNumberOfActions] = useState(0)
    const [actions, setActions] = useState('')

    function reloadCounter(newCounter) {
        setCounter(newCounter)
    }

    function renderResults(results) {
        setActions(results[0].action)
    }
    function clear() {
        setNumberOfActions(0)
        setActions('')
    }

    return (
        <PageView>
            <div className="pageview row">
                <div className="results-view">
                    <div className="results__template">
                        <div className="row">
                            <label>Number of Actions:</label>
                            <input className="n-input" name="numberOfActions" type="number" value={numberOfActions}
                                onChange={e => setNumberOfActions(e.target.value)} />
                        </div>
                        <div className="row">
                            <label>Results: </label>
                            <textarea cols="45" rows="20" id="results" name="action" type="text" value={actions}
                                onChange={e => setActions(e)} />
                        </div>
                        <div className="button__row">
                            <button className="btn btn__clear" onClick={
                                () => clear()}>
                                clear</button>
                            <button className="btn " onClick={
                                () => showResults(renderResults)}>
                                Generate Actions</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageView>
    )
}

