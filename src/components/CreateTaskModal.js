import React from "react";
import { Modal as MuiModal, Backdrop, Fade } from "@mui/material";
import { ModalWrapper } from "../styleComponents/StyledComponents";
import ModalForm from "./CreateTaskForm";

const Modal = ({ open, handleClose, data }) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalWrapper>
          {data ? <div>Edit Idea</div> : <div>Create Idea</div>}
          <ModalForm handleClose={handleClose} eventData={data} />
        </ModalWrapper>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
