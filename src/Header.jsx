import Nav from './Nav.jsx';
import logo from "./assets/Logo.svg"
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"><img src={logo} alt="Little Lemon logo" className={styles.logo}/></Link>
      <Nav />
    </header>
  )
}

export default Header;