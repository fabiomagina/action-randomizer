function getActiveTypesIds(types) {
    let activeTypes = types.filter(type => type.run)
    let activeTypesIds = activeTypes.map(type => type.id)
    return activeTypesIds
}
export default getActiveTypesIds