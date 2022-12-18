import styles from './SearchInput.module.scss'

function SearchInput({ searchGamesQuery, setSearchGamesQuery }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={searchGamesQuery}
        placeholder="Поиск..."
        onChange={(e) => setSearchGamesQuery(e.target.value)}
      />
      {searchGamesQuery && (
        <button
          className={styles.button}
          onClick={() => setSearchGamesQuery('')}
        ></button>
      )}
    </div>
  )
}

export default SearchInput
