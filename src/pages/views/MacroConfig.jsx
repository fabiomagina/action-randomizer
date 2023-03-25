import "./MacroConfig.css"
import { Link } from 'react-router-dom'
import PageView from "../../components/PageView";
import { openModal } from "../../controllers/modal-controller";
import { renderConfigTable } from "../../controllers/config-controller";
import { useContext } from 'react'
import { ActionsContext } from "../../controllers/context/Actions";

export default function MacroConfig() {
    const { types, setTypes, type, setType, setReload } = useContext(ActionsContext)
    return (
        <PageView title="MACRO CONFIG">

            <div className="config__template">
                <div className="groups__config">
                    {/* implement */}
                </div>
                <div className="row__table-desc">
                    <p>Selecione os tipos de macros a serem randomizados. Para mudar o status clique em ON/OFF.</p>
                </div>
                <div className="row__table">
                    {renderConfigTable(types, setTypes, setType, setReload)}
                </div>
                <div className="row__btn">
                    <button className="btn btn__save" onClick={
                        () => openModal(type, '.modal__type--new', setType, setReload)} >
                        New Type</button>

                    <Link to="/generate_action">
                        <button className="btn btn__clear">Generate Macro</button></Link>
                </div>
            </div >

        </PageView >
    )
}


