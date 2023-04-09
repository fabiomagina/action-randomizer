
function openModal(type, modalStyle, setType) {
    const modal = document.querySelector(modalStyle)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: flex')
    modalFocus.setAttribute('style', 'display: flex')
    setType(type)
}

export default openModal