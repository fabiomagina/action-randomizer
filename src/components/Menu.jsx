import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { Link } from "react-router-dom"
import "./Menu.css"

function Menu(props) {
    return (
        <aside className="menu">
                <ul className="menu__items">
                    <Link onClick={props.dashboardHandler} to="/"><li>Dashboard</li></Link>
                    <Link onClick={props.insertHandler} to="/"><li>Insert Actions</li></Link>
                    <div className="menu__logo">
                        <div className="menu__logo--svg">
                            <HiOutlineCubeTransparent />
                        </div>
                        <h1 className="menu__title">ACTION</h1>
                        <h1 className="menu__title menu__title--secondary">RANDOMIZER</h1>
                    </div>
                    <Link onClick={props.generateHandler} to="/"><li>Generate Action</li></Link>
                    <Link onClick={props.configHandler} to="/"><li>Macro Config</li></Link>
                </ul>
        </aside>
    )
}

export default Menu