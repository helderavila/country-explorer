/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from 'react-router-dom'

// Styles
import styles from './styles.module.scss';

function Header() {
  const history = useHistory()

  return (
    <header className={styles.layoutHeader}>
        <div>
          <h1 onClick={() => history.push('/')}>country-explorer 🌎</h1>
        </div>
        <nav className={styles.headerNavbar}>
          <a onClick={() => history.push('/')} className={history?.location.pathname === '/' ? styles.active : ''}>Início</a>
        </nav>
      </header>
  )
}

export default Header