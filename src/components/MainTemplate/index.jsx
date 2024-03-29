import React from "react";
import "./MainTemplate.css"

const MainTemplate = (props) => {
    return (
        <div className="template__main">
            <div className="row__title">
                <h1 className="title">{props.title}</h1>
            </div>
            {props.children}
        </div>
    )
}

export default MainTemplate

