import React from "react";
import { useSelector } from "react-redux";
import {
  selectSelectedDay,
  selectSelectedMonth,
} from "../redux/currentMonth-slice";
import { CellHeader, CellWrapper } from "../styleComponents/StyledComponents";
import useGetCellInfo from "../customHooks/getCellInfoHook";
import { EventsList } from "./CellEventsList";


const CalendarCell = ({ day }) => {
  const selectedDay = useSelector(selectSelectedDay);
  const selectedMonth = useSelector(selectSelectedMonth);
  const { weekDay, numberOfDay, isDayInCurrentMonth, events } = useGetCellInfo(
    selectedMonth,
    day
  );
  return (
    <CellWrapper
      isCurrentDay={selectedDay === day}
      isCurrentMonth={isDayInCurrentMonth}
    >
      <CellHeader>
        <div>{numberOfDay}</div> <div>{weekDay}</div>{" "}
      </CellHeader>
      <EventsList events={events} />
    </CellWrapper>
  );
};

export default CalendarCell;
