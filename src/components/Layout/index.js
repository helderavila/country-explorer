import { Link, useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../Pagination'

import styles from './styles.module.scss'

import { countriesNextPage, countriesPreviousPage } from '../../store/modules/country/actions'

function Layout({ children }) {
  const pagination = useSelector((state) => state.country.pagination);

  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <section className={styles.layoutContainer}>
      <header className={styles.layoutHeader}>
        <div>
          <h1 onClick={() => history.push('/')}>country-explorer 🌎</h1>
        </div>
        <nav className={styles.headerNavbar}>
          <Link to="/" className={location.pathname === '/' && styles.active}>Início</Link>
          {/* <Link to="/favorites">Favoritos</Link> */}
        </nav>
      </header>
      {children}
     {location.pathname === '/' && (
        <Pagination 
        currentPage={pagination.currentPage}
        pageCount={pagination.pageCount}
        nextPage={() => dispatch(countriesNextPage())}
        previousPage={() => dispatch(countriesPreviousPage())}
      />
     )}
    </section>
  )
}

export default Layout