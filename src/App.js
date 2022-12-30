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
  const [isCartPreviewVisible, setIsCartPreviewVisible] = useState(false)
  const [cartGames, setCartGames] = useState([])

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
			<Footer />
    </div>
  )
}

// [
// 	{
// 	 "id": 1,
// 	 "img": "images/items/forza5.jpg",
// 	 "name": "Forza Horizon 5",
// 	 "genres": [
// 		"Гонки",
// 		"Симулятор",
// 		"Открытый мир"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 1800,
// 	 "totalPrice": 1800
// 	},
// 	{
// 	 "id": 2,
// 	 "img": "images/items/codmw2022.jpg",
// 	 "name": "Call of Duty MW2 (2022)",
// 	 "genres": [
// 		"Шутер",
// 		"Экшен"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 2990,
// 	 "totalPrice": 2990
// 	},
// 	{
// 	 "id": 3,
// 	 "img": "images/items/callistoprotocol.jpg",
// 	 "name": "The Callisto Protocol",
// 	 "genres": [
// 		"Хоррор",
// 		"Шутер",
// 		"Космос"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 2200,
// 	 "totalPrice": 2200
// 	},
// 	{
// 	 "id": 4,
// 	 "img": "images/items/eldenring.jpg",
// 	 "name": "Elden Ring",
// 	 "genres": [
// 		"RPG",
// 		"Открытый мир",
// 		"Экшен"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 3200,
// 	 "totalPrice": 3200
// 	},
// 	{
// 	 "id": 5,
// 	 "img": "images/items/gta5.jpg",
// 	 "name": "Grand Theft Auto V",
// 	 "genres": [
// 		"Боевик",
// 		"Экшен",
// 		"Открытый мир"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 1000,
// 	 "totalPrice": 1000
// 	},
// 	{
// 	 "id": 6,
// 	 "img": "images/items/mortal-shell.jpg",
// 	 "name": "Mortal Shell",
// 	 "genres": [
// 		"RPG",
// 		"Экшен"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 800,
// 	 "totalPrice": 800
// 	},
// 	{
// 	 "id": 7,
// 	 "img": "images/items/deusex-hr.jpg",
// 	 "name": "Deus Ex: Human Revolution",
// 	 "genres": [
// 		"RPG",
// 		"Боевик",
// 		"Экшен",
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 350,
// 	 "totalPrice": 350
// 	},
// 	{
// 	 "id": 8,
// 	 "img": "images/items/nomanssky.jpeg",
// 	 "name": "No Man`s Sky",
// 	 "genres": [
// 		"Экшен",
// 		"Открытый мир",
// 		"Приключение"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 990,
// 	 "totalPrice": 990
// 	},
// 	{
// 	 "id": 9,
// 	 "img": "images/items/spiderman-remastered.jpeg",
// 	 "name": "Marvel’s Spider-Man Remastered",
// 	 "genres": [
// 		"Боевик",
// 		"Экшен"
// 	 ],
// 	 "inCart": false,
// 	 "count": 1,
// 	 "price": 1990,
// 	 "totalPrice": 1990
// 	}
//  ]

export default App
