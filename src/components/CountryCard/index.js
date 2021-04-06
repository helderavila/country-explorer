import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import styles from './styles.module.scss'

function CountryCard() {
  return (
    <section className={styles.cardContainer}>
      <button className={styles.favoriteButton}>
        <AiFillHeart color="#c0392b"/>
      </button>
      <img src="https://restcountries.eu/data/bra.svg" alt=""/>
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardTitle}>Brazil <span>BRA</span></p>
        <p>Capital: Brasília</p>
      </div>
    </section>
  )
}

export default CountryCard