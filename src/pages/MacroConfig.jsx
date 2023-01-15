import React, { useState } from "react";
import "./MacroConfig.css"
import PageView from "../components/templates/PageView";
import { useEffect } from "react";


export default function MacroConfig(props) {
    let [msg, setMsg] = useState('')

    useEffect(() => {
        console.log(msg)
    },[msg])
    function clear() {
        setMsg('')
    }

    return (
        <PageView title={'ACTIONS'} >
            <div className="pageview row">
                <div className="config__view">
                    <div className="config__template">
                        <div className="row ">
                            <label>Macro Config<p>Envie uma mensagem ao Admnistrador para mais informações.</p> </label>

                        </div>
                        <div className="row row__setconfig ">
                            <textarea cols="35" rows="5" name="mensagem" type="text" value={msg}
                                onChange={(e) => setMsg(e.target.value)} />
                        </div>
                        <div className="row__button">
                        <button className="btn btn__clear" onClick={
                            () => clear()}>
                            Clear</button>
                        <button className="btn btn__save" onClick={
                            () => clear()}>
                            Send</button>
                    </div>
                    </div>
                </div>
            </div>

        </PageView>
    )
}


