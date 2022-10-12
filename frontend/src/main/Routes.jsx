import { Routes, Route } from "react-router-dom"
import React from "react"
import PageView from "../pages/PageView"

const Rotas = props => (
    <Routes>
        <Route exact path="/" element={<PageView />} />
        <Route exact path="/config" element={<PageView />} />
    </Routes>
)

export default Rotas