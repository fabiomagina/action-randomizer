import { useContext } from "react";
import ButtonOperation from "../Buttons/ButtonOperation";
import ButtonStatus from "../Buttons/ButtonStatus";
import { ActionsContext } from "../../controllers/context/Actions";

const ConfigTable = () => {
    const { types, setTypes, setType, setReload } = useContext(ActionsContext)

    const tableHeader = () => {
        return <thead>
            <tr>
                <th>name</th>
                <th>qty</th>
                <th>loops</th>
                <th>chance</th>
                <th>controllers</th>
                <th>operators</th>
            </tr>
        </thead>
    }

    function tableData() {
        return <tbody>
            {types.map(type => renderTypeData(type, setType, setTypes, setReload))}
        </tbody>
    }

    function renderTypeData(type, setTypes, setReload) {
        return (
            <tr key={type.id}>
                <td className="td__title">
                    {type.title}
                </td>
                <td className="td__value">
                    {type.list ? type.list.length : 0}
                </td>
                <td className="td__loops">
                    {type.n_loops}
                </td>
                <td className="td__chance">
                    {type.chance ? type.chance : `100%`}
                </td>

                <td className="td__controllers" style={{ padding: '3px' }}>
                    <ButtonStatus
                        id={type.id}
                        status={type.run}
                        statusType={'run'}
                        setTypes={setTypes}
                        setReload={setReload} />
                    <ButtonStatus
                        id={type.id}
                        status={type.rand_pos}
                        statusType={'rand_pos'}
                        setTypes={setTypes}
                        setReload={setReload} />
                    <ButtonStatus
                        id={type.id}
                        status={type.start}
                        statusType={'start'}
                        setTypes={setTypes}
                        setReload={setReload} />
                    <ButtonStatus
                        id={type.id}
                        status={type.end}
                        statusType={'end'}
                        setTypes={setTypes}
                        setReload={setReload} />
                </td>
                <td className="td__operations">
                    <ButtonOperation
                        type={type}
                        modalType={'edit'} />
                    <ButtonOperation
                        type={type}
                        modalType={'clear'} />
                    <ButtonOperation
                        type={type}
                        modalType={'delete'} />
                </td>
            </tr >
        )
    }
    if (types.length !== 0)
        return (
            <table className="table__types">
                {tableHeader()}
                {tableData()}
            </table>
        )
}

export default ConfigTable