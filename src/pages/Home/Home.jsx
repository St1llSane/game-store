import { useMemo } from 'react'
import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'
import GenresList from '../../components/GenresList/GenresList'

function Home({
  games,
  searchGamesQuery,
  gamesByGenres,
  setGamesByGenres,
  addGameToCart,
  setCartGames,
  isGameInCart,
}) {
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

  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        {filteredGames.map((game) => (
          <HomeItem
            {...game}
            setGamesByGenres={setGamesByGenres}
            setCartGames={setCartGames}
            addGameToCart={addGameToCart}
            isGameInCart={isGameInCart}
            key={game.id}
          />
        ))}
      </div>
      <GenresList games={games} setGamesByGenres={setGamesByGenres} />
    </div>
  )
}

export default Home
