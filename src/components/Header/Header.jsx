import { Link, Route, Routes } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'
import { SlWallet } from 'react-icons/sl'
import { TfiArrowCircleDown } from 'react-icons/tfi'
import styles from './Header.module.scss'
import SearchInput from '../UI/SearchInput'
import CartPreview from '../CartPreview'

function Header({
  searchGamesQuery,
  setSearchGamesQuery,
  showCartPreview,
  isCartPreviewVisible,
  cartGames,
  deleteGameFromCart,
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
          <Link
            className={
              cartGames.length > 0
                ? ''
                : `${styles.headerRightCartwrapperDisabled}`
            }
            to="/cart"
          >
            <button className={styles.headerRightCart}>
              <RiShoppingCartLine />
              <span>{cartGames.length}</span>
            </button>
          </Link>
					{/* Поменять иконку на глаз */}
          <button
            className={styles.headerRightCartwrapperToggle}
            onClick={showCartPreview}
          >
            <TfiArrowCircleDown />
          </button>
          <CartPreview
            isCartPreviewVisible={isCartPreviewVisible}
            cartGames={cartGames}
            deleteGameFromCart={deleteGameFromCart}
          />
        </div>
        <button className={styles.headerRightMoney}>
          <SlWallet />
          <span>5000 руб.</span>
        </button>
      </div>
    </header>
  )
}

export default Header
