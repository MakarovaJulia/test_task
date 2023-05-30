import React, {FC, ReactNode, useRef} from 'react';
import {useStores} from "../../../utils/use-stores-hook";
import {Box, Button, SxProps} from "@mui/material";

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
    }) => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
      }
    }

  const modalContainerSx = {
      position: "absolute",
      left: 0,
      right:0,
      top:0,
      bottom:0,
      backgroundColor: "rgba(0,0,0, 0.5)",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
  }

  const modalWindowSx = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "36px",
      width: "480px",
      height: "min-content",
      background: "#FFFFFF",
      borderRadius: "8px",
  }

  const modalHeader = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  }

    return (
        <Box sx={modalContainerSx} ref={modalRef} onClick={closeModal}>
            <Box sx={modalWindowSx}>
                <Box sx={modalHeader}>
                    <h3>{title}</h3>
                    <Button disabled={false} onClick={onClose}>
                      <div>X</div>
                    </Button>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}