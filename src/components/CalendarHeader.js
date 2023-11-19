import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  selectSelectedMonth,
  setMonth,
  goToNextMonth,
  goToPreviousMonth,
} from "../redux/currentMonth-slice";
import Modal from "./CreateTaskModal";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(selectSelectedMonth);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNextMonth = () => {
    dispatch(goToNextMonth());
  };

  const handlePreviousMonth = () => {
    dispatch(goToPreviousMonth());
  };

  const handleMonthChange = (event) => {
    dispatch(setMonth(event.target.value));
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={openModal}
        style={{ margin: "10px" }}
      >
        +
      </Button>
      <Modal open={isModalOpen} handleClose={closeModal}>
      </Modal>
      <Button
        variant="contained"
        style={{ margin: "10px" }}
        onClick={handlePreviousMonth}
      >
        Previous
      </Button>
      {selectedMonth}
      <Button
        variant="contained"
        style={{ margin: "10px" }}
        onClick={handleNextMonth}
      >
        Next
      </Button>
      <input type="date" value={selectedMonth} onChange={handleMonthChange} />
    </>
  );
};

export default CalendarHeader;
