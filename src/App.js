import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://639df5493542a2613053e993.mockapi.io/games')
      .then((res) => res.json())
      .then((games) => setGames(games))
  }, [])

	console.log(games)

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home games={games} />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
