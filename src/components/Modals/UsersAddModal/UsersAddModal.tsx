import {observer} from "mobx-react";
import {Modal} from "../Modal";
import {useStores} from "../../../utils/use-stores-hook";
import {UserForm} from "../../forms/UserForm/UserForm";
import {Box} from "@mui/material";

export const UserModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();

    return (
        <Modal
            title='Добавить юзера'
            onClose={clearCurrentModal}
            hasBtnForPartners={false}
            isBottomSheet
        >
            <Box>
                <UserForm action='add'></UserForm>
            </Box>
        </Modal>
    )
})
