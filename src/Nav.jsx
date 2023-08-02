import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/construction">About</Link>
      <Link to="/construction">Menu</Link>
      <Link to="/reservations/form">Reservations</Link>
      <Link to="/construction">Order</Link>
      <Link to="/construction">Login</Link>
      <Link to="/construction"><img
        src={require('./assets/basket.png')}
        alt="shopping cart"
        className={styles.cart}/>
      </Link>
    </nav>
  )
}

export default Nav;