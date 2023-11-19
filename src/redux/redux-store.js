
import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "../localStorage/localStorageMiddleware";
import calendarSlice from "./currentMonth-slice";

const persistedState = localStorage.getItem('appState')
  ? JSON.parse(localStorage.getItem('appState'))
  : {};

const store = configureStore({
  reducer: {
    calendar: calendarSlice
  },
    preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;


