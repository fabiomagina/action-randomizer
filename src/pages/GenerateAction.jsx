import React, { useState } from "react";
import "./GenerateAction.css"
import PageView from "../components/templates/PageView";
import  generateAction  from "../funcs/generateAction";

export default function GenerateAction({ setCounter }) {
    const [numberOfActions, setNumberOfActions] = useState(0)
    const [actions, setActions] = useState([])

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
        <PageView>
            <div className="pageview row">
                <div className="results-view">
                    <div className="results__template">
                        <div className="row">
                            <label>Number of Actions:</label>
                            <input className="n-input" name="numberOfActions" type="number" value={numberOfActions}
                                onChange={e => setNumberOfActions(e.target.value)} />
                        </div>
                      
                        <div className="btn__row">
                            
                            <button className="btn btn__clear" onClick={
                                () => clear()}>
                                clean generated actions</button>
                            <button className="btn btn__generate" onClick={
                                () => generateAction(renderResults)}>
                                Generate Actions</button>
                        </div>
                        <div className="result__row">
                            <textarea cols="50" rows="13" id="results" name="action" type="text" value={actions}
                                onChange={e => setActions(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </PageView>
    )
}

