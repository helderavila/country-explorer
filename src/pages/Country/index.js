import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./styles.module.scss";

function Country() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img src="https://restcountries.eu/data/bra.svg" alt="" />
        <div className={styles.countryDetailsContainer}>
          {/* <h1>Brazil</h1>
          <span>Brazilia</span> */}
          <ul className={styles.countryDetailsWrapper}>
            <li>
              <p>Brasil</p>
              <span>País</span>
            </li>
            <li>
              <p>Brasilia</p>
              <span>Capital</span>
            </li>
            <li>
              <p>America do SUl</p>
              <span>Região</span>
            </li>
            <li>
              <p>199.00KM</p>
              <span>Área</span>
            </li>
            <li>
              <p>57100</p>
              <span>População</span>
            </li>
            <li>
              <p>.br</p>
              <span>Dominio</span>
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.contentContainer}>
        <h1>Mapa</h1>
        <div className={styles.mapContainer}>
          <MapContainer
            center={[-10.0,-55.0]}
            zoom={3}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-10.0,-55.0]}>
              <Popup>
                Brazil
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </section>
  );
}

export default Country;
