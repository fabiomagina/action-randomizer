import './Modal.css'

export default function renderModal({
    btnDesc, modalStyle, modalTitle, typeId, typeTitle, setTypeTitle, closeModal }) {

        
    return (

        <div className={`modal ${modalStyle}`} >

            <div className="row__modal--title">
                <h2>{modalTitle}</h2>
                <button className="btn__close" onClick={() => closeModal(modalStyle)}>X</button>

            </div>

            <div className="row__modal--inputs">
                <label>Id:</label>
                <input type="text" className="n-input" value={typeId} readOnly />
                <label>Title:</label>
                <input type="text" onChange={(e) => setTypeTitle(e.target.value)} value={typeTitle} />
            </div>

            <div className="row__btn">
                <button className="btn btn__save">{btnDesc}</button>
            </div>


        </div >
    )
}