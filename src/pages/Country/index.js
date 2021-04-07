/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./styles.module.scss";

function Country() {
  const history = useHistory()
  const { state } = useLocation()

  useEffect(() => {
    if (!state) history.push('/')
  },[])
  document.title = `${state?.country.name} | CountryExplorer`

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img src={state?.country.flag} alt={state?.country.name} />
        <div className={styles.countryDetailsContainer}>
          <ul className={styles.countryDetailsWrapper}>
            <li>
              <p>{state?.country.name}</p>
              <span>País</span>
            </li>
            <li>
              <p>{state?.country.capital}</p>
              <span>Capital</span>
            </li>
            <li>
              <p>{state?.country.region}</p>
              <span>Região</span>
            </li>
            <li>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(state?.country.area)}KM²</p>
              <span>Área</span>
            </li>
            <li>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(state?.country.population)}</p>
              <span>População</span>
            </li>
            <li>
              <p>{state?.country.domain}</p>
              <span>Domínio</span>
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.contentContainer}>
        <h1>Mapa</h1>
        <div className={styles.mapContainer}>
          <MapContainer
            center={state?.country.latlng}
            zoom={3}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={state?.country.latlng}>
              <Popup>
                {state?.country.name}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </section>
  );
}

export default Country;
