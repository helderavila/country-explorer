import { Link, useLocation, useHistory } from 'react-router-dom'

// Styles
import styles from './styles.module.scss';

function Header() {
  const location = useLocation()
  const history = useHistory()

  return (
    <header className={styles.layoutHeader}>
        <div>
          <h1 onClick={() => history.push('/')}>country-explorer 🌎</h1>
        </div>
        <nav className={styles.headerNavbar}>
          <Link to="/" className={location.pathname === '/' && styles.active}>Início</Link>
        </nav>
      </header>
  )
}

export default Header