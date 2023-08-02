import logo from "./assets/Logo.svg"
import styles from './Footer.module.css';
import { Link } from "react-router-dom";

function Footer () {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <section>
        <p>Navigation</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/construction">About</Link></li>
          <li><Link to="/construction">Menu</Link></li>
          <li><Link to="/reservations/form">Reservations</Link></li>
          <li><Link to="/construction">Order Online</Link></li>
          <li><Link to="/construction">Login</Link></li>
        </ul>
      </section>
      <section>
        <p>Contact</p>
        <ul>
          <li><Link to="/construction">Address</Link></li>
          <li><Link to="/construction">Phone number</Link></li>
          <li><Link to="/construction">Email</Link></li>
        </ul>
      </section>
      <section>
        <p>Social Media</p>
        <ul>
          <li><Link to="/construction">Facebook</Link></li>
          <li><Link to="/construction">Instagram</Link></li>
          <li><Link to="/construction">Twitter</Link></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;