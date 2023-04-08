import EditModal from "../components/Modal/EditModal"
import ClearActionsModal from "../components/Modal/ClearActionsModal"
import NewTypeModal from '../components/Modal/NewTypeModal'
import DeleteActionsModal from '../components/Modal/DeleteActionsModal'

export function renderModals() {
    return <>
        <EditModal />
        <ClearActionsModal />
        <DeleteActionsModal />
        <NewTypeModal/>
    </>
}

export function openModal(type, modalStyle, setType) {
    const modal = document.querySelector(modalStyle)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: flex')
    modalFocus.setAttribute('style', 'display: flex')
    console.log(modalStyle === '.modal__type--new')
    setType(type)
}

export function closeModal(modalTypeStyle) {
    const modal = document.querySelector(`.${modalTypeStyle}`)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: none')
    modalFocus.setAttribute('style', 'display: none')
}