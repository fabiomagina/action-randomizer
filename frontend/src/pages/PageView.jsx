import React, { useEffect, useState } from "react";
import Main from "../components/templates/Main";
import "./PageView.css"
import Add from "../components/Add";
import Generate from "../components/Generate";
import Dashboard from "../components/Dashboard";
import Menu from "../components/templates/Menu";


const PageView = props => {
    const [dashboard, setDashboard] = useState(true)
    const [add, setAdd] = useState(true)
    const [generator, setGenerator] = useState(true)

    useEffect(function () {
        const dashboardview = document.querySelector('.dashboard-view')
        if (dashboard) {
            dashboardview.style.display = 'flex'
        } else {
            dashboardview.style.display = 'none'
        }
    }, [dashboard])

    useEffect(function () {
        const dashboard = document.querySelector('.add-view')
        if (add) {
            dashboard.style.display = 'flex'
        } else {
            dashboard.style.display = 'none'
        }
    }, [add])

    useEffect(function () {
        const generatorview = document.querySelector('.generator-view')
        if (generator) {
            generatorview.style.display = 'flex'
        } else {
            generatorview.style.display = 'none'
        }
    }, [generator])

    function dashboardHandler() {
        setDashboard(current => !current)
    }
    function addHandler() {
        setAdd(current => !current)
    }
    const generatorHandler = () => {
        setGenerator(current => !current)
    }
    return (
        <>
            <Main title="Dashboard">
                    <div className="pageview row">
                        <div className="add-view">
                            <Add />
                        </div>
                        <div className="generator-view">
                            <Generate />
                        </div>

                    </div>
                    <div className="dashboard-view">
                        <Dashboard />
                    </div>

            </Main>
            <Menu addHandler={addHandler} dashboardHandler={dashboardHandler} generatorHandler={generatorHandler}/>
        </>
    )
}

export default PageView

