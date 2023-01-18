import React from "react";
import Cube from "../templates/Cube"
import { Link } from 'react-router-dom'
import './Menu.css'
import Copy from "./Copy";

function Menu(props) {
    return (
        <aside className="menu">
            <div className="row__logo">
                <Cube />
                <h1 className="menu__title">RANDOMIZER</h1>
            </div>
                <Copy />
            <ul className="menu__items">
                <li>
                    <Link onClick={props.dashboardHandler} >Dashboard</Link>
                </li>

                <li>
                    <Link onClick={props.addHandler} to="/">Insert Actions</Link>
                </li>
                <li>
                    <Link to="/generate_action">Generate Action</Link>
                </li>
                <li>
                    <Link to="/macro_config">Macro Config</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Menu