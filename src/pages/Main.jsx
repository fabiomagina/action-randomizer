import { useState, useEffect, useContext } from 'react';
import { ActionsContext } from '../controllers/context/Actions';
import GenerateAction from './views/GenerateAction'
import InsertAction from './views/InsertAction'
import MacroConfig from './views/MacroConfig'
import Dashboard from "./views/Dashboard";
import Menu from '../components/Menu';
import "./Main.css"
import { AiOutlineMenu } from 'react-icons/ai';
import { renderModals } from '../controllers/modal-controller';

export default function Main() {
    const { type, setType, setReload } = useContext(ActionsContext)
    const [dashboard, setDashboard] = useState(true)
    const [insertView, setInsertView] = useState(true)
    const [generateView, setGenerateView] = useState(true)
    const [configView, setConfigView] = useState(false)
    const [menu, setMenu] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(function () {
            handleDashboard()
            setConfigView(false)
    }, [dashboard])

    useEffect(function () {
        if (insertView) {
            handleDisplay(false, '.view__config')
            setConfigView(false)
        }
        handleDisplay(insertView, '.view__insert')
    }, [insertView])

    useEffect(function () {
        if (generateView) {
            handleDisplay(false, '.view__config')
            setConfigView(false)
        }
        handleDisplay(generateView, '.view__generate')
    }, [generateView])

    useEffect(function () {
        handleDisplay(configView, '.view__config')
        if (configView) {
            handleDisplay(false, '.view__generate')
            setGenerateView(false)
            handleDisplay(false, '.view__insert')
            setInsertView(false)
        }
    }, [configView])

    useEffect(function () {
        const menuView = document.querySelector('.view__menu')
        if (menu && mobile) {
            menuView.setAttribute('style', 'z-index: 3')
        } if (!menu && mobile) {
            menuView.setAttribute('style', 'z-index: -1')
        }
    }, [menu, mobile])

    function handleDisplay(viewType, style) {
        const view = document.querySelector(style)
        if (viewType) view.style.display = 'flex'
        else view.style.display = 'none'
    }

    function handleDashboard() {
        const dashboard_view = document.querySelector('.view__dashboard')
        const container_view = document.querySelector('.container__main')

        if (dashboard) {
            dashboard_view.style.display = 'flex'
            container_view.style.gridTemplateAreas = `
            'menu menu'
            'main dashboard'`
        }
        else {
            dashboard_view.style.display = 'none'
            container_view.style.gridTemplateAreas = `
            'menu menu'
            'main main'`
        }
    }

    function viewHandler(setter) {
        setter(current => !current)
    }

    return (
        <>
            <div className="row__menu--hamburguer" onClick={() => {
                viewHandler(setMenu)
                setMobile(true)
            }}>
                <button className="menu--hamburguer" ><AiOutlineMenu /></button>
            </div>
            <div className="container__main" onClick={() => {
                if (menu) viewHandler(setMenu)
            }}>
                <div className="view__menu">
                    <Menu dashboardHandler={() => viewHandler(setDashboard)}
                        insertHandler={() => viewHandler(setInsertView)}
                        generateHandler={() => viewHandler(setGenerateView)}
                        configHandler={() => viewHandler(setConfigView)} />
                </div>
                <div className="view__main">
                    <div className="view__config">
                        <MacroConfig />
                    </div>
                    <div className="view__insert">
                        <InsertAction />
                    </div>
                    <div className="view__generate">
                        <GenerateAction />
                    </div>
                </div>
                <div className="view__dashboard">
                    <Dashboard />
                </div>
                {renderModals(type, setType, setReload)}
                <div className="modal__container">

                </div>
            </div>

        </>
    )
}



