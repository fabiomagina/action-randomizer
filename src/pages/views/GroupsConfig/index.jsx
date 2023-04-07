import "./CreateGroups.css"
import PageView from "../../components/PageView";
import { useContext } from 'react'
import { ActionsContext } from "../../controllers/context/Actions";

export default function MacroConfig() {
    const { types, setTypes, type, setType, setReload } = useContext(ActionsContext)
    return (
        <PageView title="MACRO CONFIG">
            {/* implementar lógica */}

        </PageView >
    )
}


