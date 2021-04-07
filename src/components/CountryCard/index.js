import { useHistory } from 'react-router-dom'

import { AiOutlineEdit } from 'react-icons/ai'

import styles from './styles.module.scss'

function CountryCard({ country, onEditCountry }) {
  const history = useHistory()


  return (
    <section className={styles.cardContainer}>
      <button 
        type="button"
        className={styles.favoriteButton}
        onClick={() => onEditCountry(country)}
      >
        <AiOutlineEdit color="#363636"/>
      </button>
      <img src={country.flag} alt={country.name}/>
      <div 
        onClick={() => 
          history.push(`/country`, {
            country: {
              flag: country.flag,
              name: country.name,
              capital: country.capital,
              region: country.region,
              population: country.population,
              latlng: country.latlng,
              area: country.area,
              domain: country.topLevelDomain[0]
            }})}  
        className={styles.cardInfoWrapper}
      >
        <p className={styles.cardTitle}>{country.name} <span>{country.alpha3Code}</span></p>
        <p>{country.capital}</p>
      </div>
    </section>
  )
}

export default CountryCard