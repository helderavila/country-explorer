import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

// Redux
import { countriesListRequest } from "../../store/modules/country/actions";

// Components
import CountryCard from "../../components/CountryCard";

// Styles
import styles from "./styles.module.scss";

Modal.setAppElement('#root')

function Home() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // ReduxState
  const countries = useSelector((state) => state.country.countries);
  
  // ComponentState
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editCountryData, setEditCountryData] = useState()
  
  useEffect(() => {
    if (countries.length <= 0) dispatch(countriesListRequest());
    document.title = "Início | CountryExplorer";
  }, []);
  
  
  const onSubmit = data => console.log(data);

  function handleOpenModal(countryData) {
    setModalIsOpen(true)
    setEditCountryData(countryData)
    console.log(countryData)
  }

  return (
    <>
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >

          <form 
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Editar país</h2>
            <div className={styles.inputGroup}>
              <label>País
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="País" 
                  defaultValue={editCountryData?.name}
                  {...register("name")}
                />
              </label>
              <label>Capital
                <input 
                  type="text" 
                  name="capital" 
                  id="capital" 
                  placeholder="Capital" 
                  defaultValue={editCountryData?.capital}
                  {...register("capital")}
                />
              </label>
            </div>
            <label>Região
              <input 
                type="text" 
                name="region" 
                id="region" 
                placeholder="Região" 
                defaultValue={editCountryData?.region}
                {...register("region")}
              />
            </label>
            <div className={styles.inputGroup}>
              <label>Area
                <input 
                  type="text" 
                  name="area" 
                  id="area" 
                  placeholder="Area" 
                  defaultValue={editCountryData?.area}
                  {...register("area")}
                />
              </label>
              <label>
                População
                <input 
                  type="text" 
                  name="population" 
                  id="population" 
                  placeholder="População"
                  defaultValue={editCountryData?.population}
                  {...register("population")}
                />
              </label>
            </div>
            <button
              type="submit"
            >
              Salvar
            </button>
          </form>
        </Modal>
      <ul className={styles.container}>
        {countries.slice(0, 12).map((country, index) => (
          <CountryCard 
            key={index} 
            country={country}
            onEditCountry={(countryData) => handleOpenModal(countryData)} 
          />
        ))}
      </ul>
    </>
  );
}

export default Home;
