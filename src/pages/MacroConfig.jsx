import React, { useState } from "react";
import "./MacroConfig.css"
import PageView from "../components/templates/PageView";
import { useEffect } from "react";


export default function MacroConfig(props) {

    return (
        <PageView title="MACRO CONFIG">

            <div className="config__template">
                
                <div className="row__setconfig">
                    <textarea cols="35" rows="5" name="mensagem" type="text" value='Envie uma mensagem ao Administrador para mais informações.'
                    />
                </div>
                <div className="row__button">

                    <button className="btn btn__save" onClick={
                        () => window.open("mailto:fabiomagina@gmail.com")}>
                        Send</button>
                </div>
            </div>


        </PageView>
    )
}


