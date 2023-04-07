import { Link } from "react-router-dom"
import "./Menu.css"
import Logo from "./Logo";

function Menu(props) {
    
    return (
        <aside className="menu">
            <ul className="menu__items">

                <Link to="/" onClick={props.dashboardHandler}>
                    <li>Dashboard</li>
                </Link>
                
                <Link to="/" onClick={props.insertHandler}>
                    <li>Insert Actions</li>
                </Link>

                <Logo/>

                <Link to="/"
                    onClick={props.generateHandler}>
                    <li>Generate Action</li>
                </Link>

                <Link to="/"
                    onClick={props.configHandler} >
                    <li>Macro Config</li>
                </Link>
            </ul>
        </aside>
    )
}

export default Menu