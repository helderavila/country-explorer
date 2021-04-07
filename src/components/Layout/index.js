import { Link, useLocation, useHistory } from 'react-router-dom'

import styles from './styles.module.scss'

function Layout({ children }) {

  const location = useLocation()
  const history = useHistory()

  return (
    <section className={styles.layoutContainer}>
      <header className={styles.layoutHeader}>
        <div>
          <h1 onClick={() => history.push('/')}>country-explorer 🌎</h1>
        </div>
        <nav className={styles.headerNavbar}>
          <Link to="/" className={location.pathname === '/' && styles.active}>Início</Link>
        </nav>
      </header>
      {children}
    </section>
  )
}

export default Layout