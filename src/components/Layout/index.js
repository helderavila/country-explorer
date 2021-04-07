import Header from '../Header'

import styles from './styles.module.scss'

function Layout({ children }) {
  return (
    <section className={styles.layoutContainer}>
      <Header />
      {children}
    </section>
  )
}

export default Layout