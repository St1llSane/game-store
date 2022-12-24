import styles from './HomeItem.module.scss'

function HomeItem({
  id,
  img,
  name,
  genres,
  price,
  inCart,
  setGamesByGenres,
  addGameToCart,
  isGameInCart,
}) {
  return (
    <div className={styles.homeItem}>
      <img className={styles.homeItemImg} src={img} alt="Item image" />
      <div className={styles.homeItemContent}>
        <h3 className={styles.homeItemContentTitle}>{name}</h3>
        <ul className={styles.homeItemContentGenres}>
          {genres.map((genre) => (
            <li key={genre}>
              <button onClick={(e) => setGamesByGenres(e.target.innerText)}>
                {genre}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.homeItemContentBuy}>
          <span>{price} руб.</span>
          <button
            className={`${styles.homeItemContentBuyBtn} ${
              inCart ? styles.homeItemContentBuyBtnInCart : ''
            }`}
            onClick={() => addGameToCart(id)}
          >
            {isGameInCart(id) ? 'Удалить' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
