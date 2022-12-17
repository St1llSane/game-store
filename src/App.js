import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [games, setGames] = useState([])
  const [searchGames, setSearchGames] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('https://639df5493542a2613053e993.mockapi.io/games')
      .catch(() => alert('Ошибка при загрузке игр'))
      .then((res) => res.json())
      .then((games) => setGames(games))
  }, [])

  const searchGamesHandler = (e) => {
    setSearchGames(e.target.value)
  }

  const filteredGames = useMemo(() => {
    if (!query) return games
    return games.filter((game) => {
      return game.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [games, query])

  return (
    <div className={styles.app}>
      <Header
        searchGames={searchGames}
        searchGamesHandler={searchGamesHandler}
        query={query}
        setQuery={setQuery}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home games={games} filteredGames={filteredGames} />}
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
