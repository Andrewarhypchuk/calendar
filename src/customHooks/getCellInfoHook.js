import moment from "moment";
import { useSelector } from "react-redux";
import { selectEventByDay } from "../redux/currentMonth-slice";

const useGetCellInfo = (selectedDay, tableDay) => {
  const events = useSelector(selectEventByDay(tableDay));
  const weekDay = moment(tableDay).format("dd");
  const numberOfDay = moment(tableDay).date();
  const isDayInCurrentMonth =
    moment(selectedDay).format("MM") === moment(tableDay).format("MM");

  return {
    weekDay,
    numberOfDay,
    isDayInCurrentMonth,
    events,
  };
};

export default useGetCellInfo;

