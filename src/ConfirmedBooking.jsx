import { useOutletContext } from 'react-router-dom';
import styles from './ConfirmedBooking.module.css';

export default function ConfirmedBooking() {

  const [reservation, setReservation] = useOutletContext();

  return (
    <div className={styles.section}>
      <h1 className={styles.head1}>Booking Confirmation</h1>
      <h2 className={styles.head2}>Reservation #{Math.floor(Math.random() * 100000)}</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Date </td>
              <td>{reservation.date}</td>
            </tr>
            <tr>
              <td>Time </td>
              <td>{reservation.time}</td>
            </tr>
            <tr>
              <td>Guests </td>
              <td>{reservation.guests}</td>
            </tr>
            <tr>
              <td>Occasion </td>
              <td>{reservation.occasion}</td>
            </tr>
          </tbody>
        </table>
        <img className={styles.image} src={require('./assets/restaurant chef B.jpg')} alt="chef preparing meal" />
      </div>
    </div>
  )
}
