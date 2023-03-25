import { setStatus } from '../controllers/axios'

const ButtonStatus = ({id, status, statusType, setTypes, setReload}) => {
    if (status) return <button aria-label={statusType} title={`turn ${statusType}_status OFF`} onClick={() =>
            setStatus(id, !status, statusType, setTypes, setReload)}
            className="btn__status btn__status--active">{statusType}</button>
    return <button aria-label={statusType} title={`turn ${statusType} ON`} onClick={() =>
            setStatus(id, !status, statusType, setTypes, setReload)}
            className="btn__status btn__status--inactive">{statusType}</button>
}

export default ButtonStatus