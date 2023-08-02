import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import BookingPage from "./BookingPage"
import React, { createContext, useReducer } from "react";
import { fetchAPI, submitAPI } from "./fetchAPI";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Construction from "./Construction";

export const TimeContext = createContext();

function Main() {

  //reducer function
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'get_times' :
        /* const newDate = new Date(action.payload); */
        return fetchAPI(new Date(action.payload));
      default:
        throw new Error();
    }
  }

  const today = new Date();

  const initializeTimes = () => {
    return (
      fetchAPI(today)
      /* ['17:00','18:00','19:00','20:00','21:00','22:00'] */
    )
  }

/*   const refresh = () => {
    dispatch({type: 'get_times'});
  } */

/*   useEffect(() => {
    initializeTimes();
  },[]); */

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <TimeContext.Provider value={{ dispatch, availableTimes }}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reservations' element={<BookingPage />}>
            <Route path='form' element={<BookingForm />}/>
            <Route path='confirm' element={<ConfirmedBooking />}/>
          </Route>
          <Route path='/construction' element={<Construction/>} />
        </Routes>
      </TimeContext.Provider>
    </>
  )
}

export default Main;