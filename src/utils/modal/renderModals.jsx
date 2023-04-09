import ClearActionsModal from "../../components/Modal/ClearActionsModal";
import DeleteActionsModal from "../../components/Modal/DeleteActionsModal";
import EditModal from "../../components/Modal/EditModal";
import NewTypeModal from "../../components/Modal/NewTypeModal";

function renderModals() {
    return <>
        <EditModal />
        <ClearActionsModal />
        <DeleteActionsModal />
        <NewTypeModal/>
    </>
}

export default renderModals