import { useState } from 'react';
import BookingForm from './BookingForm';
import styles from './BookingPage.module.css';
import { Outlet } from 'react-router-dom';
import {format} from 'date-fns';

const BookingPage = () => {
  const [reservation, setReservation] = useState({
    date : format(new Date(), 'yyyy-MM-dd'),
    time: '',
    guests: 2,
    occasion: 'None'
  })

  return (
    <main>
      <section className={styles.intro_container}>
        <div className={styles.intro_content}>
          <div className={styles.intro_text}>
            <h1>Reservations</h1>
            <p>Find a table for any occasion</p>
          </div>
          <img src={require('./assets/restaurant-table-setting.jpg')} alt="restaurant tables" className={styles.intro_image} />
        </div>
      </section>
      <section className={styles.form}>
        <Outlet context={[reservation, setReservation]}/>
      </section>
    </main>
  )
}

export default BookingPage;