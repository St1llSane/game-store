import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [games, setGames] = useState([])
  const [searchGamesQuery, setSearchGamesQuery] = useState('')
  const [gamesByGenres, setGamesByGenres] = useState([])
  const [cartGames, setCartGames] = useState([])

  // TODO Добавить обозначение, что игра находится в корзине

  useEffect(() => {
    const loadData = async () => {
      await axios
        .get('https://639df5493542a2613053e993.mockapi.io/cartGames')
        .catch((error) => {
          alert('Ошибка при загрузке корзины')
          console.log(error)
        })
        .then((res) => setCartGames(res.data))
      await axios
        .get('https://639df5493542a2613053e993.mockapi.io/games')
        .catch((error) => {
          alert('Ошибка при загрузке игр')
          console.log(error)
        })
        .then((res) => setGames(res.data))
    }
    loadData()
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

  const addGameToCartHandler = (id) => {
    const thisGame = games.find((game) => +game.id === +id)
    thisGame.inCart = !thisGame.inCart
    console.log('thisGame', thisGame)
    console.log('cartGames', cartGames)

    if (cartGames.includes(thisGame)) {
      setCartGames((prev) => prev.filter((game) => +game.id !== +id))
      axios
        .delete(
          `https://639df5493542a2613053e993.mockapi.io/cartGames/${thisGame.id}`
        )
        .catch((error) => {
          alert('Ошибка при удалении из корзины')
          console.log(error)
        })
    } else {
      setCartGames([...cartGames, thisGame])
      axios
        .post('https://639df5493542a2613053e993.mockapi.io/cartGames', thisGame)
        .catch((error) => {
          alert('Ошибка при добавлении в корзину')
          console.log(error)
        })
    }
  }

  const isGameInCart = (id) => {
    return cartGames.some((game) => +game.id === +id)
  }

  const deleteGameFromCart = (id) => {
    const thisGame = games.find((game) => +game.id === +id)
    thisGame.inCart = !thisGame.inCart
    console.log('thisGame', thisGame)
    console.log('cartGames', cartGames)

    setCartGames((prev) => prev.filter((game) => +game.id !== +id))
    axios
      .delete(`https://639df5493542a2613053e993.mockapi.io/cartGames/${id}`)
      .catch((error) => {
        alert('Ошибка при удалении из корзины')
        console.log(error)
      })
  }

  console.log('cartGames', cartGames)

  return (
    <div className={styles.app}>
      <Header
        searchGamesQuery={searchGamesQuery}
        setSearchGamesQuery={setSearchGamesQuery}
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
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
