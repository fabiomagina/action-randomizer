import React, { useEffect, useState } from "react";
import "./PageView.css"
import Menu from "./Menu";
import Dashboard from "../Dashboard";
import { getCounter } from "../../funcs/axios"

const PageView = (props) => {
    const [dashboard, setDashboard] = useState(true)
    const [counter, setCounter] = useState({ actions: 0, types: 0, created: 0 })

    useEffect(function () {
        const dashboardview = document.querySelector('.dashboard-view')
        if (dashboard) {
            dashboardview.style.display = 'flex'
        } else {
            dashboardview.style.display = 'none'
        }
    }, [dashboard])


    function handler(setter) {
        setter(current => !current)
    }

    function reloadCounter(newCounter) {
        setCounter(newCounter)
    }

    return (
        <>
            <div className="container">
                <div className="pageview row">
                    {props.children}
                </div>

                <div className="dashboard-view">
                    <Dashboard reload={props.reload} />
                </div>

            </div>
            <div className="view__menu">
                <Menu dashboardHandler={() => handler(setDashboard)} />
            </div>
        </>
    )
}

export default PageView

