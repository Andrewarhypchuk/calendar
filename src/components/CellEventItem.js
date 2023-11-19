import { useState } from "react";
import Modal from "./CreateTaskModal";
import { IconButton, Tooltip } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";


export const CellEventItem = ({ event }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <li key={event.id}>
      <Tooltip>
        <IconButton onClick={openModal}>
          <AssignmentIcon />
        </IconButton>
        {event.title}
        <Modal open={isModalOpen} handleClose={closeModal} data={event} />
      </Tooltip>
    </li>
  );
};
