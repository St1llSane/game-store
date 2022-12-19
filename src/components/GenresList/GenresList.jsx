import styles from './GenresList.module.scss'

function GenresList({ genres, setGamesByGenres }) {
  return (
    <div className={styles.genresBlock}>
      <h3 className={styles.genresBlockTitle}>Жанры</h3>
      <ul className={styles.genresList}>
        <li>
          <button onClick={() => setGamesByGenres('')}>Все</button>
        </li>
        {genres.map((genre) => (
          <li key={genre}>
            <button onClick={(e) => setGamesByGenres(e.target.innerText)}>
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenresList
