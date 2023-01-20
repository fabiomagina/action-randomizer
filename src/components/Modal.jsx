import './Modal.css'


export default function renderModal({
    btnDesc, modalStyle, modalTitle, modal__main, callback }) {

    const modalFocus = document.querySelector('.modal--focus')

    function closeModal(modalTypeStyle) {
        const modal = document.querySelector(`.${modalStyle}`)
        modal.setAttribute('style', 'display: none')
        modalFocus.setAttribute('style', 'display: none')
    }

    return (

        <div key={modalStyle} className={`modal ${modalStyle}`} >

            <div className="row__modal--title">
                <h2>{modalTitle}</h2>
                <button className="btn__close" onClick={() => closeModal()}>X</button>
            </div>

            <div className="row__modal--inputs">
                {modal__main}
            </div>

            <div className="row__btn">
                <button className="btn btn__save" onClick={() => { 
                    closeModal()
                    callback()
                }}>{btnDesc}</button>
            </div>


        </div >
    )
}