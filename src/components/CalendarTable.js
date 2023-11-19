import React from "react";
import CalendarCell from "./CalendarCell";
import { useSelector } from 'react-redux';
import { GridWrapper } from "../styleComponents/StyledComponents";
import { selectCalendarMonth } from "../redux/currentMonth-slice";

const CalendarTable = () => {
    const viewedMonth = useSelector(selectCalendarMonth);
    return (
      <GridWrapper>
        {viewedMonth.map((day) => (
          <CalendarCell key={day} day={day} />
        ))}
      </GridWrapper>
    );
  };
  
  export default CalendarTable;
