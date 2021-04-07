import { AiOutlineSearch } from 'react-icons/ai'

import styles from './styles.module.scss';

function SearchInput({ onSearch }) {
  return (
    <div data-testid="search-input-container" className={styles.container}>
      <AiOutlineSearch />
      <input 
        data-testid="search-input"
        onChange={(e) => onSearch(e.target.value)} 
        type="text" 
        name="search" 
        id="search" 
        placeholder="Pesquisar..."
      />
    </div>
  )
}

export default SearchInput