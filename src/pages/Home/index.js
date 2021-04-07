import { useEffect, useState } from "react";

// Libs
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import Modal from 'react-modal';


// Redux
import { countriesListRequest, countryEditRequest } from "../../store/modules/country/actions";

// Components
import CountryCard from "../../components/CountryCard";

// Styles
import styles from "./styles.module.scss";

Modal.setAppElement('#root')

function Home() {
  const dispatch = useDispatch();
  
  // ReduxState
  const countries = useSelector((state) => state.country.countries);
  
  // ComponentState
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editCountryData, setEditCountryData] = useState()
  
  const { register, handleSubmit, setValue } = useForm();


  useEffect(() => {
    if (countries.length <= 0) dispatch(countriesListRequest());
    document.title = "Início | CountryExplorer";
  }, []);
  

  function onSubmit(data) {
    dispatch(countryEditRequest(data, editCountryData))
    setEditCountryData(null)
    setModalIsOpen(false)
    toast.success("País editado com sucesso!")
  }

  function handleOpenModal(countryData) {
    setModalIsOpen(true)
    setEditCountryData(countryData.alpha3Code)
    setValue('name', countryData.name)
    setValue('capital', countryData.capital)
    setValue('region', countryData.region)
    setValue('area', countryData.area)
    setValue('population', countryData.population)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
    setEditCountryData(null)
  }

  return (
    <>
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
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
                  {...register("name")}
                />
              </label>
              <label>Capital
                <input 
                  type="text" 
                  name="capital" 
                  id="capital" 
                  placeholder="Capital" 
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
