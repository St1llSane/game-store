import { Link, Route, Routes } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'
import styles from './Header.module.scss'
import SearchInput from '../UI/SearchInput'
import CartPreview from '../CartPreview'

function Header({
  searchGamesQuery,
  setSearchGamesQuery,
  cartGames,
	deleteGameFromCart,
  minusCartGameCount,
  plusCartGameCount,
}) {
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
        <div className={styles.headerRightCartwrapper}>
          <Link to="/cart">
            <button className={styles.headerRightCart}>
              <RiShoppingCartLine />
              <span>{cartGames.length}</span>
            </button>
          </Link>
          <CartPreview
            cartGames={cartGames}
						deleteGameFromCart={deleteGameFromCart}
            minusCartGameCount={minusCartGameCount}
            plusCartGameCount={plusCartGameCount}
          />
        </div>
        <span className={styles.headerRightMoney}>5000 руб.</span>
      </div>
    </header>
  )
}

export default Header
