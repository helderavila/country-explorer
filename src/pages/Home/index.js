/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// Libs
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";

// Redux
import {
  countriesListRequest,
  countryEditRequest,
} from "../../store/modules/country/actions";

// Components
import CountryCard from "../../components/CountryCard";

// Styles
import styles from "./styles.module.scss";

Modal.setAppElement("#root");

function Home() {
  const dispatch = useDispatch();

  // ReduxState
  const countries = useSelector((state) => state.country.countries);
  const pagination = useSelector((state) => state.country.pagination);

  // ComponentState
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editCountryData, setEditCountryData] = useState();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (countries.length <= 0) dispatch(countriesListRequest());
    document.title = "Início | CountryExplorer";
  }, []);

  function onSubmit(data) {
    dispatch(countryEditRequest(data, editCountryData));
    setEditCountryData(null);
    setModalIsOpen(false);
    toast.success("País editado com sucesso!");
  }

  function handleOpenModal(countryData) {
    setModalIsOpen(true);
    setEditCountryData(countryData.alpha3Code);
    setValue("name", countryData.name);
    setValue("capital", countryData.capital);
    setValue("region", countryData.region);
    setValue("area", countryData.area);
    setValue("population", countryData.population);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    setEditCountryData(null);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Editar país"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={handleCloseModal}
        >
          <AiOutlineClose />
        </button>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Editar país</h2>
          <div className={styles.inputGroup}>
            <label>
              País
              <input
                type="text"
                name="name"
                id="name"
                placeholder="País"
                {...register("name")}
              />
            </label>
            <label>
              Capital
              <input
                type="text"
                name="capital"
                id="capital"
                placeholder="Capital"
                {...register("capital")}
              />
            </label>
          </div>
          <label>
            Região
            <input
              type="text"
              name="region"
              id="region"
              placeholder="Região"
              {...register("region")}
            />
          </label>
          <div className={styles.inputGroup}>
            <label>
              Area
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
          <button type="submit">Salvar</button>
        </form>
      </Modal>
      <motion.ul
        className={styles.container}
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {countries
          .slice(pagination.currentPage * 12, (pagination.currentPage + 1) * 12)
          .map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              onEditCountry={(countryData) => handleOpenModal(countryData)}
            />
          ))}
      </motion.ul>
    </>
  );
}

export default Home;
