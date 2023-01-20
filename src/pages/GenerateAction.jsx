import React, { useState, useEffect } from "react";
import "./GenerateAction.css"
import PageView from "../components/templates/PageView";
import { postGenerated, getTypes } from "../funcs/axios";
import generateAction from "../funcs/generateAction";

export default function GenerateAction() {
    const [types, setTypes] = useState([])
    const [nLoops, setNLoops] = useState(1)
    const [reload, setReload] = useState(false)
    const [actions, setActions] = useState([])
    const [saveType, setSaveType] = useState(0)

    useEffect(() => {
        getTypes(setTypes)
    }, [])


    function clear() {
        setNLoops(0)
        setActions('')
    }

    return (
        <PageView reload={reload} title="GENERATE ACTIONS">
            <div className="generate__template">

                <div className="row row__action-loops">
                    <label>Number of Actions:</label>
                    <input className="n-input" name="nLoops" type="number" value={nLoops}
                        onChange={e => setNLoops(e.target.value)} />
                </div>

                <div className="row__btn">
                    <button className="btn btn__clear" onClick={
                        () => clear()}>
                        clear generated actions</button>
                    <button className="btn btn__generate" onClick={
                        () => generateAction(nLoops, types, setActions, setReload(!reload))}>
                        Generate Actions</button>
                </div>

                <div className="row__textarea">
                    <textarea cols="50" rows="13" id="results" name="action" type="text" value={actions}
                        onChange={e => setActions(e.target.value)} />
                </div>

                <div className="row__btn row__save">
                    <label >Save as:</label>
                    <select name="select" onChange={e => setSaveType(e.target.value)} >
                        {types.map((type) =>
                            <option key={type.id} className="max-width"
                                value={type.id}>{type.title}</option>)}
                    </select>

                    <button className="btn btn__save" onClick={
                        () => postGenerated(setReload, actions, saveType, clear)}>
                        Save</button>
                </div>
            </div>
        </PageView >
    )
}

