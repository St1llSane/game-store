import { useEffect, useMemo, useState } from 'react'
import { json, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

// const LS_CART_GAMES = 'savedCartGames'

function App() {
  const [games, setGames] = useState([])
  const [searchGamesQuery, setSearchGamesQuery] = useState('')
  const [gamesByGenres, setGamesByGenres] = useState([])
  const [cartGames, setCartGames] = useState([])

  // TODO Добавить обозначение, что игра находится в корзине

  useEffect(() => {
    axios
      .get('https://639df5493542a2613053e993.mockapi.io/games')
      .catch((error) => {
        alert('Ошибка при загрузке игр')
        console.log(error)
      })
      .then((res) => setGames(res.data))

    axios
      .get('https://639df5493542a2613053e993.mockapi.io/cartGames')
      .catch((error) => {
        alert('Ошибка при загрузке корзины')
        console.log(error)
      })
      .then((res) => setCartGames(res.data))
  }, [])

  // Поиск игр по запросу в инпуте либо по жанру
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

  // Удаляем повторяющиеся элементы из массива с помощью типа данных Set и сразу же перобразуем его в массив, при этом с помощью метода flat мы возвращаем новый массив с меньшей вложенностью и с помощью метода sort сразу сортируем масиив
  const genres = [...new Set(games.map((game) => game.genres).flat())].sort()
  // const genresFiltered = genres.filter((genre, i) => genres.indexOf(genre) === i)
  // console.log(genresFiltered)

  const addGameToCartHandler = (id) => {
    const findGame = games.filter((game) => game.id === id)
    const thisGame = findGame[0]
    console.log(thisGame)
    console.log(cartGames)

    if (cartGames.includes(thisGame)) {
      return
    } else {
      setCartGames([...cartGames, thisGame])
      // cartGamesToLocalStorage(thisGame)
      axios
        .post('https://639df5493542a2613053e993.mockapi.io/cartGames', thisGame)
        .catch((error) => {
          alert('Ошибка при добавлении в корзину')
          console.log(error)
        })
    }
  }

  const deleteGameFromCart = (id) => {
		setCartGames((prev) => prev.filter((game) => game.id !== id))
  }

  // const cartGamesToLocalStorage = (thisGame) => {
  //   localStorage.setItem(LS_CART_GAMES, JSON.stringify([...cartGames, thisGame]))
  // }

  const minusCartGameCount = (id) => {
    setCartGames((prev) => {
      return prev.map((game) => {
        if (game.id === id && game.count > 1) {
          // cartGamesToLocalStorage()
          return {
            ...game,
            count: --game.count,
            totalPrice: game.price * game.count,
          }
        }
        return game
      })
    })
  }

  const plusCartGameCount = (id) => {
    setCartGames((prev) => {
      return prev.map((game) => {
        if (game.id === id && game.count < 10) {
          // cartGamesToLocalStorage()
          return {
            ...game,
            count: ++game.count,
            totalPrice: game.price * game.count,
          }
        }
        return game
      })
    })
  }

  return (
    <div className={styles.app}>
      <Header
        searchGamesQuery={searchGamesQuery}
        setSearchGamesQuery={setSearchGamesQuery}
        cartGames={cartGames}
        deleteGameFromCart={deleteGameFromCart}
        minusCartGameCount={minusCartGameCount}
        plusCartGameCount={plusCartGameCount}
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
            />
          }
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
