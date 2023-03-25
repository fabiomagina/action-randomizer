import { Routes, Route } from "react-router-dom"
import React from "react"
import Main from "./Main"
import { ActionsProvider } from "../controllers/context/Actions"

const Rotas = props => (
    <ActionsProvider>
    <Routes>
        <Route exact path="/" element={<Main />} />
    </Routes>
    </ActionsProvider>
)

export default Rotas