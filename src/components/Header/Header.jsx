import { Link, Route, Routes } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'
import styles from './Header.module.scss'
import SearchInput from '../UI/SearchInput'

function Header({ searchGamesQuery, setSearchGamesQuery }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <button className={styles.headerLogo}>Game Store</button>
      </Link>
      <div className={styles.headerInput}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <SearchInput
                searchGamesQuery={searchGamesQuery}
                setSearchGamesQuery={setSearchGamesQuery}
              />
            }
          ></Route>
        </Routes>
      </div>
      <div className={styles.headerRight}>
        <Link to="/cart">
          <button className={styles.headerRightCart}>
            <RiShoppingCartLine />
            <span>0</span>
          </button>
        </Link>
        <span className={styles.headerRightMoney}>5000 руб.</span>
      </div>
    </header>
  )
}

export default Header
