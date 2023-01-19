import React, { useEffect, useState } from "react";
import "./PageView.css"
import Menu from "./Menu";
import Dashboard from "../Dashboard";

const PageView = (props) => {
    const [dashboard, setDashboard] = useState(true)

    useEffect(function () {
        const dashboardview = document.querySelector('.view__dashboard')
        if (dashboard) {
            dashboardview.style.display = 'flex'
        } else {
            dashboardview.style.display = 'none'
        }
    }, [dashboard])


    function handler(setter) {
        setter(current => !current)
    }

    return (
        <>
            <div className="container__main">
                <div className="view__menu">
                    <Menu dashboardHandler={() => handler(setDashboard)} />
                </div>
                <div className="view__main">
                    <div className="template__main">
                        <div className="row__title">
                        <h1 className="title">{props.title}</h1>
                        </div>
                        {props.children}
                    </div>
                </div>
                <div className="view__dashboard">
                    <Dashboard reload={props.reload} />
                </div>

            </div>

            <div className="modal--focus" />

        </>
    )
}

export default PageView

