import styles from './BookingForm.module.css';
import { useContext, useState, useEffect } from 'react';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';
import { TimeContext } from './Main';
import {format} from 'date-fns';
import { Link, useOutletContext } from 'react-router-dom';
import { submitAPI } from './fetchAPI';

function BookingForm() {

//remove context for testing
const { dispatch, availableTimes } = useContext(TimeContext);

/* const [reservation, setReservation] = useState({
  date : format(new Date(), 'yyyy-MM-dd'),
  time: '18:00',
  guests: 2,
  occasion: 'None'
}) */

const [reservation, setReservation] = useOutletContext();
const [disabled, setDisabled] = useState(false);

// for testing. Also comment out dispatch call
/* const [availableTimes, setAvailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00']) */

const handleSubmit = (e) => {
  // if !valid then preventDefault
  if(!submitAPI(reservation)) {
    e.preventDefault();
  } else {
    console.log(reservation);
    return;
  }
}

// Validation for # guests and time
const checkDisabled = () => {
  if(reservation.guests > 10 || reservation.guests < 1 || reservation.time === '') {
    setDisabled(true);
  } else setDisabled(false);
}
useEffect(checkDisabled, [reservation.guests, reservation.time]);

const increment = () => {
  if(reservation.guests < 10) {
    setReservation({ ...reservation, guests: (reservation.guests + 1) });
  }
}
const decrement = () => {
  if(reservation.guests > 1) {
    setReservation({ ...reservation, guests: (reservation.guests - 1) });
  }
}

return (
<form className={styles.form}>
  <div className={styles.cell1}>
    <label htmlFor="res-date">Date</label><br />
    <input
      type="date"
      id="res-date"
      value={reservation.date}
      onChange={(e) => {
        setReservation({ ...reservation, date: e.target.value });
        dispatch({type: 'get_times', payload: reservation.date});  //remove for testing
      }}
    />
  </div>

  <div className={styles.cell2}>
    <label htmlFor="res-time">Time</label><br />
    <select
      id="res-time"
      value={reservation.time}
      onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
    >
      <option value="">Select Time</option>
      {availableTimes.map(time => {
          return <option key={time} value={time}>{time}</option>
      })}
    </select>
  </div>

  <div className={styles.cell3}>
    <label htmlFor="guests">Number of guests</label><br />
    <input
      type="number"
      placeholder="1"
      min="1" max="10"
      id="guests"
      value={reservation.guests}
      onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
    />
    <img src={minus} alt="decrement button" className={styles.minus} onClick={() => decrement()}/>
    <img src={plus} alt="increment button" className={styles.plus} onClick={() => increment()}/>
  </div>

  <div className={styles.cell4}>
    <label htmlFor="occasion">Occasion</label><br />
    <select
      id="occasion"
      value={reservation.occasion}
      onChange={(e) => setReservation({ ...reservation, occasion: e.target.value })}
    >
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>None</option>
    </select>
  </div>

  <div className={styles.cell5}>
    <Link to='/reservations/confirm'>
      <button disabled={disabled} type="submit" value="Make Your reservation" onClick={handleSubmit}>Make your reservation</button> {/* Link to page2 if valid*/}
    </Link>
  </div>
</form>
)}

export default BookingForm;