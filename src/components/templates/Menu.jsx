import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { Link } from "react-router-dom"
import "./Menu.css"

function Menu(props) {
    return (
        <aside className="menu">
            <div className="row__menu--logo">
                <HiOutlineCubeTransparent />
                <div className="row__menu--title">
                    <h1 className="menu__title">ACTION</h1>
                    <h1 className="menu__title menu__title--randomizer">RANDOMIZER</h1>
                </div>
            </div>
            {/* <Copy /> */}
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