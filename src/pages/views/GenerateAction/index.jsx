import React, { useContext, useState } from "react";
import "./GenerateAction.css"
import PageView from "../../../components/MainTemplate";
import { ActionsContext } from "../../../controllers/context/Actions";
import fixedGroups from "../../../controllers/fixedGroups";
import generateAction from "../../../utils/generate/generateAction";
import { sendAction } from "../../../controllers/axios";

export default function GenerateAction() {
    const { types, setReload } = useContext(ActionsContext)
    const [nLoops, setNLoops] = useState(1)
    const [fixedType, setFixedType] = useState()
    const [fullCycle, setFullCycle] = useState(false)
    const [generatedActions, setGeneratedActions] = useState([])
    const [saveTypeId, setSaveTypeId] = useState(0)

    function handleFullCycle(fullCycle, setFullCycle) {
        setFullCycle(!fullCycle)
    }

    function clear(setGeneratedActions) {
        setGeneratedActions('')
    }

    function groupsFromTypes() {
        return ['', ...Object.keys(fixedGroups)].map((type) =>
            <option key={type} value={type}>
                {type ? type + ' ' + fixedGroups[type] : 'modo padrão'}
            </option>)
    }

    const fixedTypesSelectOptions = () => {
        return (
            <select
                name="select"
                onChange={e => setFixedType(e.target.value)} >
                {groupsFromTypes()}
            </select>
        )
    }

    const nLoopsInput = () => {
        return (
            <input
                className="n-input"
                name="nLoops"
                type="number"
                value={nLoops}
                onChange={e =>
                    setNLoops(e.target.value)}
            />
        )
    }

    const handleFullCycleButton = () => {
        return (
            <button
                className="btn btn__fullCycle"
                style={fullCycle ? { background: '#054705' } : { background: 'grey' }}
                onClick={
                    () => handleFullCycle(fullCycle, setFullCycle)}>
                FullCycle?
            </button>
        )
    }

    const generateActionButton = () => {
        return (
            <button
                className="btn btn__generate"
                onClick={
                    () => generateAction(nLoops, types, setGeneratedActions,
                        fullCycle, fixedType)}>
                Generate Actions
            </button>
        )
    }

    const actionsGeneratedTextArea = () => {
        return (
            <textarea cols="50"
                rows="13"
                id="results"
                name="action"
                type="text"
                value={generatedActions}
                onChange={e =>
                    setGeneratedActions(e.target.value)} />
        )
    }

    const saveAsSelectOptions = () => {
        return (
            <select
                name="select"
                onChange={e =>
                    setSaveTypeId(e.target.value)} >
                {types.map((type) =>
                    <option key={type.id}
                        value={type.id}>
                        {type.title}
                    </option>)}
            </select>
        )
    }

    const saveGeneratedButton = () => {
        return (
            <button className="btn btn__save" onClick={
                () => sendAction(saveTypeId, generatedActions,
                    clear(setGeneratedActions), setReload)}>
                Save
            </button>
        )
    }

    return (
        <PageView title="GENERATE ACTIONS">
            <div className="generate__template">
                <div className="row__btn row__type">
                    <label >Type:</label>
                    {fixedTypesSelectOptions()}
                </div>

                <div className="row row__action-loops">
                    <label>Number of Actions:</label>
                    {nLoopsInput()}
                </div>

                <div className="row__btn">
                    {handleFullCycleButton()}
                    {generateActionButton()}
                </div>

                <div className="row__textarea">
                    {actionsGeneratedTextArea()}
                </div>

                <div className="row__btn row__save">
                    <label>
                        Save as:
                    </label>
                    {saveAsSelectOptions()}
                    {saveGeneratedButton()}
                </div>
            </div>
        </PageView >
    )
}

