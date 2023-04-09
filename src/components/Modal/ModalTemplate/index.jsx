import closeModal from '../../../utils/modal/closeModal'
import './ModalTemplate.css'

const ModalTemplate = ({ btnDesc, modalStyle, modalTitle, modal__main, callback }) => {

    return (
        <div key={modalStyle} className={`modal ${modalStyle}`} >
            <div className="row__modal--title">
                <h2>
                    {modalTitle}
                </h2>
                <button className="btn__close"
                    onClick={() => closeModal(modalStyle)}>
                    X
                </button>
            </div>
            <div className="row__modal--inputs">
                {modal__main}
            </div>
            <div className="row__btn">
                <button
                    className="btn btn__save"
                    onClick={() => {
                        closeModal(modalStyle)
                        callback()
                    }}>
                    {btnDesc}
                </button>
            </div>
        </div >
    )
}

export default ModalTemplate