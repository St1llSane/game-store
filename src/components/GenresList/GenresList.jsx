import styles from './GenresList.module.scss'

function GenresList({ games, setGamesByGenres }) {
  const gamesByGenresHandler = (e) => {
    setGamesByGenres(e.target.innerText)
  }

	const genres = [...new Set(games.map((game) => game.genres).flat())].sort()

  return (
    <div className={styles.genresBlock}>
      <h3 className={styles.genresBlockTitle}>Жанры</h3>
      <ul className={styles.genresList}>
        <li>
          <button onClick={() => setGamesByGenres('')}>Все</button>
        </li>
        {genres.map((genre) => (
          <li key={genre}>
            <button onClick={gamesByGenresHandler}>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenresList
