import "./MacroConfig.css"
import { Link } from 'react-router-dom';
import PageView from "../../../components/MainTemplate";
import openModal from "../../../utils/modal/openModal"
import ConfigTable from "../../../components/ConfigTable/ConfigTable";

export default function MacroConfig() {
    return (
        <PageView title="MACRO CONFIG">
            <div className="config__template">
                <div className="row__table-desc">
                    <p>Selecione os tipos de macros a serem randomizados.
                        Para mudar o status clique em ON/OFF.</p>
                </div>
                <div className="row__table">
                    {ConfigTable()}
                </div>
                <div className="row__btn">
                    <button
                        className="btn btn__save"
                        onClick={() => openModal({}, '.modal__type--new')} >
                        New Type
                    </button>
                    <Link to="/generate_action">
                        <button className="btn btn__clear">
                            Generate Macro
                        </button>
                    </Link>
                </div>
            </div >

        </PageView >
    )
}


