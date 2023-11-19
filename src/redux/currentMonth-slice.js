import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { getGeneratedMonth } from "../utils/getGeneratedMonth";
import axios from "axios";

// export const setEvents = createAsyncThunk(
//   'calendar/events',
//   async (dispatch, getState) => {
//     const currentMonth = getState().calendar.selectedMonth.format('MMMM');

//     const config = {
//       headers: {
//         'Current-Month': currentMonth,
//       },
//     };
//     return await axios
//       .get('https://blablabla/api/events', config)
//       .then((response) => response.data);
//   }
// );
//сюди можна помістити логіку для отримання даних або відправлення

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedMonth: moment().format("YYYY-MM-DD"),
    selectedDay: moment().format("YYYY-MM-DD"),
    viewedMonth: getGeneratedMonth(moment().format("YYYY-MM-DD")),
    events: [
      {
        id: 1,
        title: "test",
        description: "bla bla bla",
        date: "2023-01-01",
        time: "12:00",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01",
      },
    ],
  },
  reducers: {
    goToNextMonth: (state) => {
      state.selectedMonth = moment(state.selectedMonth)
        .add(1, "month")
        .format("YYYY-MM-DD");
      state.viewedMonth = getGeneratedMonth(state.selectedMonth);
    },
    goToPreviousMonth: (state) => {
      state.selectedMonth = moment(state.selectedMonth)
        .subtract(1, "month")
        .format("YYYY-MM-DD");
      state.viewedMonth = getGeneratedMonth(state.selectedMonth);
    },
    setMonth: (state, action) => {
      state.selectedMonth = moment(action.payload).format("YYYY-MM-DD");
      state.selectedDay = moment(action.payload).format("YYYY-MM-DD");
      state.viewedMonth = getGeneratedMonth(state.selectedMonth);
      console.log(moment(action.payload).format("MM"));
    },
    addEvent: (state, action) => {
      const newEvent = action.payload;
      const existingEventIndex = state.events.findIndex((event) => {
        console.log(event.id, newEvent.id);
        return event.id === newEvent.id;
      });
      console.log(existingEventIndex);
      if (existingEventIndex !== -1) {
        state.events[existingEventIndex] = newEvent;
      } else {
        console.log("push");
        state.events.push(newEvent);
      }
    },
    deleteEvent: (state, action) => {
      const eventId = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
    }
  },
  // extraReducers: {
  //   [setEvents.pending]: (state, action) => {
  //     state.status = "loading";
  //   },
  //   [setEvents.fulfilled]: (state, action) => {
  //     state.status = "success";
  //     state.users = action.payload;
  //   },
  //   [setEvents.rejected]: (state, action) => {
  //     state.status = "failed";
  //   },
  // },
});

export const {
  setMonth,
  updateViewedMonth,
  goToNextMonth,
  goToPreviousMonth,
  addEvent,
  deleteEvent
} = calendarSlice.actions;

export const selectSelectedMonth = (state) => state.calendar.selectedMonth;
export const selectSelectedDay = (state) => state.calendar.selectedDay;
export const selectCalendarMonth = (state) => state.calendar.viewedMonth;
export const selectEventByDay = (day) => (state) =>
  state.calendar.events.filter((event) => event.date === day);

export default calendarSlice.reducer;
