import {observer} from "mobx-react";
import {Modal} from "../Modal";
import {useStores} from "../../../utils/use-stores-hook";
import {UserForm} from "../../forms/UserForm/UserForm";
import {Box} from "@mui/material";

export const UserUpdateModal = observer(() => {
  const {modalStore: {clearCurrentModal}} = useStores();

  return (
    <Modal
      title='Изменить данные пользователя'
      onClose={clearCurrentModal}
      hasBtnForPartners={false}
      isBottomSheet
    >
      <Box>
        <UserForm action='update'></UserForm>
      </Box>
    </Modal>
  )
})
