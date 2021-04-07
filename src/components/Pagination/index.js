import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./styles.module.scss";

function Pagination({ nextPage, previousPage, currentPage, pageCount }) {
  
  return (
    <footer className={styles.container}>
      <nav className={styles.paginationWrapper}>
        <button type="button" onClick={previousPage} disabled={currentPage == 0}>
          <IoIosArrowBack color="#0077FF"/>
        </button>
        <span>{currentPage + 1}/{pageCount}</span>
        <button type="button" onClick={nextPage} disabled={currentPage + 1 == pageCount}>
          <IoIosArrowForward color="#0077FF"/>
        </button>
      </nav>
    </footer>
  );
}

export default Pagination;
