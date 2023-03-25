import React, { useState, useContext, useEffect } from "react";
import "./GenerateAction.css"
import PageView from "../../components/PageView";
import { sendAction } from "../../controllers/axios";
import {
    handleFullCycle, generateAction, clear, groupsFromTypes
} from "../../controllers/generate-controller";
import { ActionsContext } from "../../controllers/context/Actions";

export default function GenerateAction() {
    const { types, setReload } = useContext(ActionsContext)
    const [nLoops, setNLoops] = useState(1)
    const [fixedType, setFixedType] = useState()
    const [fullCycle, setFullCycle] = useState(false)
    const [generatedActions, setGeneratedActions] = useState([])
    const [saveTypeId, setSaveTypeId] = useState(0)
 
    useEffect(() => {
        console.log(fixedType)
    }, [fixedType])

    return (
        <PageView title="GENERATE ACTIONS">
            <div className="generate__template">
                <div className="row__btn row__type">
                    <label >Type:</label>
                    <select name="select" onChange={e => setFixedType(e.target.value)} >
                        {groupsFromTypes()}
                    </select>
                </div>

                <div className="row row__action-loops">
                    <label>Number of Actions:</label>
                    <input className="n-input" name="nLoops" type="number" value={nLoops}
                        onChange={e => setNLoops(e.target.value)} />
                </div>

                <div className="row__btn">
                    <button className="btn btn__fullCycle" style={fullCycle ? { background: '#054705' } : { background: 'grey' }} onClick={
                        () => handleFullCycle(fullCycle, setFullCycle)}>
                        FullCycle? </button>
                    <button className="btn btn__generate" onClick={
                        () => generateAction(nLoops, types, setGeneratedActions, fullCycle, fixedType)}>
                        Generate Actions</button>
                </div>

                <div className="row__textarea">
                    <textarea cols="50" rows="13" id="results" name="action" type="text" value={generatedActions}
                        onChange={e => setGeneratedActions(e.target.value)} />
                </div>

                <div className="row__btn row__save">
                    <label >Save as:</label>
                    <select name="select" onChange={e => setSaveTypeId(e.target.value)} >
                        {types.map((type) =>
                            <option key={type.id}
                                value={type.id}>{type.title}</option>)}
                    </select>

                    <button className="btn btn__save" onClick={
                        () => sendAction(saveTypeId, generatedActions, clear(setGeneratedActions), setReload)}>Save</button>
                </div>
            </div>
        </PageView >
    )
}

