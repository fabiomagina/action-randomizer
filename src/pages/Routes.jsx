import { Routes, Route } from "react-router-dom"
import React from "react"
import GenerateAction from "./GenerateAction"
import InsertAction from "./InsertAction"
import MacroConfig from "./MacroConfig"


const Rotas = props => (
    <Routes>
        <Route exact path="/" element={<InsertAction />} />
        <Route exact path="/generate_action" element={<GenerateAction />} />
        <Route exact path="/macro_config" element={<MacroConfig />} />
    </Routes>
)

export default Rotas