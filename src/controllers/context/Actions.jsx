import { createContext, useEffect, useState } from "react";
import { getActions } from "../axios";

export const ActionsContext = createContext();

export const ActionsProvider = ({children}) => {
    const [types, setTypes] = useState([{id: 1}])
    const [type, setType] = useState({})
    const [reload, setReload] = useState(0)
    
    useEffect(() => {
        getActions(setTypes)
    }, [])

    useEffect(() => {
        getActions(setTypes)
        setReload(0)
    }, [reload])

    return (
        <ActionsContext.Provider value={{ types, setTypes, type, setType, setReload }}>
            {children}
        </ActionsContext.Provider>
    )
}