import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { countriesListRequest } from '../../store/modules/country/actions'

// Components
import CountryCard from '../../components/CountryCard'

// Styles
import styles from './styles.module.scss'

function Home() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.country.countries)

  useEffect(() => {
    if (countries.length <= 0) dispatch(countriesListRequest())
  },[])


  return (
    <ul className={styles.container}>
      {countries.slice(0,12).map(country => (
        <CountryCard country={country}/>
      ))}
    </ul>
  )
}

export default Home