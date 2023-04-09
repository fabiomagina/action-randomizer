import fixedGroups from "../../../controllers/fixedGroups"
import getActiveTypesIds from "./getActiveTypesIds"

function getTypesIds(types, fixedType) {
    let activeTypesIds = fixedType ? fixedGroups[fixedType] : getActiveTypesIds(types)
    return activeTypesIds
}

export default getTypesIds