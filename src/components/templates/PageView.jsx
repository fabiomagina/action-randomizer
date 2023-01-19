import React, { useEffect, useState } from "react";
import "./PageView.css"
import Menu from "./Menu";
import Dashboard from "../Dashboard";
import { AiOutlineMenu } from 'react-icons/ai';

const PageView = (props) => {
    const [dashboard, setDashboard] = useState(true)
    const [menu, setMenu] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(function () {
        const dashboardView = document.querySelector('.view__dashboard')
        if (dashboard) {
            dashboardView.style.display = 'flex'
        } else {
            dashboardView.style.display = 'none'
        }
    }, [dashboard])

    useEffect(function () {
        const menuView = document.querySelector('.view__menu')
        if (menu && mobile) {
            menuView.setAttribute('style', 'z-index: 3')
        } if (!menu && mobile) {
            menuView.setAttribute('style', 'z-index: -1')
        }
    }, [menu, mobile])

    function handler(setter) {
        setter(current => !current)
    }

    return (
        <>
            <div className="row__menu--hamburguer" onClick={() => {
                handler(setMenu)
                setMobile(true)
            }}>
                <button className="menu--hamburguer" ><AiOutlineMenu /></button>
            </div>
            <div className="container__main" onClick={() => {
                if (menu) handler(setMenu)
            }}>
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

