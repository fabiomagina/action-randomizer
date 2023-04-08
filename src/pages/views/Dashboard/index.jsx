import React, { useContext } from "react";
import DashboardCard from "../../../components/DashboardCard"
import { ActionsContext } from "../../../controllers/context/Actions";
import './Dashboard.css'

function Dashboard() {
    const { types, setTypes, setType, setReload } = useContext(ActionsContext)
    return (<>
        <div className="dashboard__template">
            {types.map((action) =>
                <DashboardCard key={action.id + action.title} id={action.id} title={action.title}
                    list={action.list} color="" chance={action.chance ? action.chance : 100}
                    n_loops={action.n_loops} run={action.run} rand_pos={action.rand_pos}
                    setTypes={setTypes} start={action.start} end={action.end} 
                    type={action} setType={setType} setReload={setReload} />
            )}
        </div>
        
    </>
    )
}
export default Dashboard
