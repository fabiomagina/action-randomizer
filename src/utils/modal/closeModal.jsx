function closeModal(modalTypeStyle) {
    const modal = document.querySelector(`.${modalTypeStyle}`)
    const modalFocus = document.querySelector('.modal__container')
    modal.setAttribute('style', 'display: none')
    modalFocus.setAttribute('style', 'display: none')
}

export default closeModal