import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./styles.module.scss";

function Pagination({ nextPage, previousPage, currentPage, pageCount }) {
  
  return (
    <footer data-testid="footer-pagination" className={styles.container}>
      <nav className={styles.paginationWrapper}>
        <button 
          data-testid="previous-button-pagination" 
          type="button" 
          onClick={previousPage} 
          disabled={currentPage === 1}
        >
          <IoIosArrowBack color="#0077FF"/>
        </button>
        <span data-testid="text-pagination">{currentPage}/{pageCount}</span>
        <button 
          data-testid="next-button-pagination" 
          type="button" 
          onClick={nextPage} 
          disabled={currentPage === pageCount}
        >
          <IoIosArrowForward color="#0077FF"/>
        </button>
      </nav>
    </footer>
  );
}

export default Pagination;
