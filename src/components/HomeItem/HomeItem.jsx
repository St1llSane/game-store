import styles from './HomeItem.module.scss'

function HomeItem({ img, name, genres, price, setGamesByGenres }) {
  return (
    <div className={styles.homeItem}>
      <img className={styles.homeItemImg} src={img} alt="Item image" />
      <div className={styles.homeItemContent}>
        <h3 className={styles.homeItemContentTitle}>{name}</h3>
        <ul className={styles.homeItemContentGenres}>
          {genres.map((genre, i) => (
            <li key={i}>
              <button onClick={(e) => setGamesByGenres(e.target.innerText)}>{genre}</button>
            </li>
          ))}
        </ul>
        <div className={styles.homeItemContentBuy}>
          <span>{price} руб.</span>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
