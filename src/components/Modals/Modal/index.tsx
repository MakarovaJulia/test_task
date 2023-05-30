import React, {FC, ReactNode, useRef} from 'react';
import {useStores} from "../../../utils/use-stores-hook";
import {Box, Button} from "@mui/material";

interface Props {
    title: ReactNode;
    onClose: () => void;
    hasBtnForPartners: boolean;
    hideCloseBtn?: boolean;
    isBottomSheet?: boolean;
    children: any;
}

export const Modal: FC<Props> = (
    {
        title,
        onClose,
        children,
        hideCloseBtn=false,
    }) => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
      }
    }

    return (
        <div ref={modalRef} onClick={closeModal}>
            <Box>
                <Box>
                    <h3>{title}</h3>
                    {!hideCloseBtn &&
                        <Button disabled={false} onClick={onClose}>
                          <div>X</div>
                        </Button>
                    }
                </Box>
                <Box>
                    {children}
                </Box>
            </Box>
        </div>
    )
}