import React, { useContext, useState } from "react";
import { ActionsContext } from "../../../controllers/context/Actions";
import { sendAction} from "../../../controllers/axios";
import PageView from "../../../components/MainTemplate";
import "./InsertAction.css"

export default function InsertAction() {
    const {  types, setReload }  = useContext(ActionsContext)
    const [ typeIndex, setTypeIndex ] = useState(0)
    const [ newAction, setNewAction ] = useState('')

    function clear() {
        setNewAction('')
    }
    
    return (
        <PageView title={'INSERT ACTIONS'}>
            <div className="insert__template">
                <div className="row__textarea">
                    <label>Script: </label>
                    <textarea cols="50" rows="13" id="newAction" name="newAction" type="text" value={newAction}
                        onChange={e => setNewAction(e.target.value)} />
                </div>
                <div className="row row__type">
                    <label>Action Type:</label>
                    <select name="select" onChange={e => setTypeIndex(e.target.value)} >
                        {types.map((type) =>
                            <option key={type.id} className="max-width"
                                value={type.id}>{type.title}</option>)}
                    </select>
                </div>
                <div className="row__btn row__save">
                    <button className="btn btn__clear" onClick={
                        () => clear()}>
                        clear</button>
                    <button className="btn btn__save" onClick={
                        () => sendAction(typeIndex, newAction, clear, setReload)}>
                        Send</button>
                </div>
            </div>
        </PageView>
    )
}




