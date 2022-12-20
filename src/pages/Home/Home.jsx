import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'
import GenresList from '../../components/GenresList/GenresList'

function Home({
  filteredGames,
  genres,
  setGamesByGenres,
  addGameToCart,
  setCartGames,
}) {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        {filteredGames.map((game) => (
          <HomeItem
            {...game}
            setGamesByGenres={setGamesByGenres}
            setCartGames={setCartGames}
            addGameToCart={addGameToCart}
            key={game.id}
          />
        ))}
      </div>
      <GenresList genres={genres} setGamesByGenres={setGamesByGenres} />
    </div>
  )
}

export default Home
