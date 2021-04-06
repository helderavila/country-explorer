import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

function Layout({ children }) {

  return (
    <section className={styles.layoutContainer}>
      <header className={styles.layoutHeader}>
        <div>
          <h2>Olá, Bem-vindo(a) 👋</h2>
          <h1>Explore e conheça novos lugares</h1>
        </div>
        <nav className={styles.headerNavbar}>
          <Link to="/">Início</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </header>
      {children}
    </section>
  )
}

export default Layout