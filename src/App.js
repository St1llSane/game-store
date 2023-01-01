import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import GamePage from './pages/GamePage'
import Footer from './components/Footer'

const LS_CART_KEY = 'cartItems'

function App() {
  const [games, setGames] = useState([])
  const [searchGamesQuery, setSearchGamesQuery] = useState('')
  const [gamesByGenres, setGamesByGenres] = useState([])
  const [cartGames, setCartGames] = useState([])
  const [isCartPreviewVisible, setIsCartPreviewVisible] = useState(false)

  const setCartAndSave = (newCart) => {
    setCartGames(newCart)
    localStorage.setItem(LS_CART_KEY, JSON.stringify(newCart))
  }

  const loadCart = () => {
    const cart = localStorage.getItem(LS_CART_KEY)
    if (cart) {
      setCartGames(JSON.parse(cart))
    }
  }

  useEffect(() => {
    async function fetchingData() {
      await axios
        .get('https://639df5493542a2613053e993.mockapi.io/games')
        .catch((error) => {
          alert('Ошибка при загрузке игр')
          console.log(error)
        })
        .then((res) => setGames(res.data))

      loadCart()
    }
    fetchingData()
  }, [])

  const filteredGames = useMemo(() => {
    if (gamesByGenres.length === 0) {
      if (!searchGamesQuery) return games
      return games.filter((game) => {
        return game.name.toLowerCase().includes(searchGamesQuery.toLowerCase())
      })
    } else {
      return games.filter((game) => {
        return game.genres.some((genre) => genre === gamesByGenres)
      })
    }
  }, [games, searchGamesQuery, gamesByGenres])

  const genres = [...new Set(games.map((game) => game.genres).flat())].sort()

  const showCartPreviewHandler = () => {
    setIsCartPreviewVisible(!isCartPreviewVisible)
  }

  const addGameToCartHandler = (item) => {
    const thisGame = cartGames.find((game) => +game.parentId === +item.id)

    if (thisGame) {
      const newCart = cartGames.filter((game) => +game.parentId !== +item.id)
      setCartAndSave(newCart)
    } else {
      setCartAndSave([...cartGames, item])
    }
  }

  const isGameInCart = (item) => {
    return cartGames.some((game) => +game.parentId === +item.id)
  }

  const deleteGameFromCart = (id) => {
    const newCart = cartGames.filter((game) => +game.id !== +id)
    setCartAndSave(newCart)
  }

  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <Header
          searchGamesQuery={searchGamesQuery}
          setSearchGamesQuery={setSearchGamesQuery}
          showCartPreview={showCartPreviewHandler}
          isCartPreviewVisible={isCartPreviewVisible}
          setIsCartPreviewVisible={setIsCartPreviewVisible}
          cartGames={cartGames}
          deleteGameFromCart={deleteGameFromCart}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                filteredGames={filteredGames}
                genres={genres}
                setGamesByGenres={setGamesByGenres}
                addGameToCart={addGameToCartHandler}
                setCartGames={setCartGames}
                isGameInCart={isGameInCart}
              />
            }
          ></Route>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartGames={cartGames}
                deleteGameFromCart={deleteGameFromCart}
              />
            }
          ></Route>
          <Route exact path="/game-page" element={<GamePage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
