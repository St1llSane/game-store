import styles from './SearchInput.module.scss'

function SearchInput({ query, setQuery }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={query}
        placeholder="Поиск..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
