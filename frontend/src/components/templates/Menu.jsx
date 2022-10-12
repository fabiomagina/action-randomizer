import React from "react";
import Cube from "./Cube"
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu(props) {
    return (
        <aside className="menu">
            <div className="logo">
                <Cube />ActionRandomizer
            </div>
            <ul>
                <li>
                    <Link onClick={props.dashboardHandler} to="/">Dashboard</Link>
                </li>
                <li>
                    <Link onClick={props.addHandler}>Generate Macro</Link>
                </li>
                <li>
                    <Link onClick={props.generatorHandler}>Add Actions</Link>
                </li>
                <li>
                    <Link>Macro Config</Link>
                </li>
                <li>
                    <Link>Show Results</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Menu