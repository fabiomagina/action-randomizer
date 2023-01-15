import React, { useState } from "react";
import "./MacroConfig.css"
import PageView from "../components/common/PageView";


export default function MacroConfig(props) {
    const [config, setConfig] = useState('')

    function clear() {
        setConfig('')
    }

    return (
        <PageView title={'ACTIONS'} >
            <div className="pageview row">
                <div className="config__view">
                    <div className="config__template">
                        <div className="row ">
                            <label>Config:<p>Envie uma mensagem ao Admnistrador para mais informações.</p> </label>

                        </div>
                        <div className="row row__setconfig ">
                            <textarea cols="40" rows="9" id="n-input" name="config" type="text" value={config}
                                onChange={e => setConfig(e)} />
                        </div>
                        <div className="row__button">
                        <button className="btn btn__clear" onClick={
                            () => clear()}>
                            Clear</button>
                        <button className="btn btn__save" onClick={
                            () => { }}>
                            Save</button>
                    </div>
                    </div>
                </div>
            </div>

        </PageView>
    )
}


