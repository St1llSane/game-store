import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [games, setGames] = useState([])
  const [searchGamesQuery, setSearchGamesQuery] = useState('')
  const [gamesByGenres, setGamesByGenres] = useState([])

  useEffect(() => {
    fetch('https://639df5493542a2613053e993.mockapi.io/games')
      .catch((error) => {
        alert('Ошибка при загрузке игр')
        console.log(error)
      })
      .then((res) => res.json())
      .then((games) => setGames(games))
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

  return (
    <div className={styles.app}>
      <Header
        searchGamesQuery={searchGamesQuery}
        setSearchGamesQuery={setSearchGamesQuery}
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
            />
          }
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
