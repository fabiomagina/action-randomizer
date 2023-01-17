import React, { useEffect, useState } from "react";
import "./PageView.css"
import Menu from "./Menu";
import Dashboard from "../Dashboard";
import Footer from "./Footer";

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
        <div className="container">
            <div className="container__main">
                <div className="template__main">
                    <h1 className="title">{props.title}</h1>
                    {props.children}
                </div>
            </div>
            <div className="view__dashboard">
                <Dashboard reload={props.reload} />
            </div>
            <div className="view__menu">
                <Menu dashboardHandler={() => handler(setDashboard)} />
            </div>
            <div className="view__footer">
                <Footer dashboardHandler={() => handler(setDashboard)} />
            </div>
        </div>
    )
}

export default PageView

