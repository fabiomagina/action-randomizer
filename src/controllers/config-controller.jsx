import ButtonOperation from "../components/ButtonOperation";
import ButtonStatus from "../components/ButtonStatus";

export function renderConfigTable(types, setTypes, setType, setReload) {
    if (types.length !== 0)
        return (
            <table className="table__types">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>qty</th>
                        <th>loops</th>
                        <th>chance</th>
                        <th>controllers</th>
                        <th>operators</th>
                    </tr>
                </thead>
                <tbody>
                    {types.map(type => renderType(type, setType, setTypes, setReload))}
                </tbody>
            </table>
        )
}

function renderType(type, setType, setTypes, setReload) {
    return (
        <tr key={type.id}>
            <td className="td__title">
                {type.title}
            </td>
            <td className="td__value">{type.list ? type.list.length : 0}</td>
            <td className="td__loops">{
                type.n_loops}
            </td>
            <td className="td__chance">{type.chance ? type.chance : `100%`}
            </td>
            <td style={{padding: '3px'}}>
           
                    <ButtonStatus id={type.id} status={type.run} statusType={'run'} setTypes={setTypes} setReload={setReload} />
                    <ButtonStatus id={type.id} status={type.rand_pos} statusType={'rand_pos'} setTypes={setTypes} setReload={setReload} />
                

                    <ButtonStatus id={type.id} status={type.start} statusType={'start'} setTypes={setTypes} setReload={setReload} />
                    <ButtonStatus id={type.id} status={type.end} statusType={'end'} setTypes={setTypes} setReload={setReload} />
                
              
            </td>

            <td className="td__operations">
                <ButtonOperation type={type} modalType={'edit'}></ButtonOperation>
                <ButtonOperation type={type} modalType={'clear'}></ButtonOperation>
                <ButtonOperation type={type} modalType={'delete'}></ButtonOperation>
            </td>
        </tr >
    )
}


