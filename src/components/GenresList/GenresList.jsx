import styles from './GenresList.module.scss'

function GenresList({ genres }) {
  return (
    <div className={styles.genresBlock}>
      <ul className={styles.genresList}>
        {genres.map((genre) => (
          <li key={genre}>
            <button>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenresList
