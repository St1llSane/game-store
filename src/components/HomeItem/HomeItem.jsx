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
  const item = { id, parentId: id, img, name, price, inCart }

  const gameToCart = () => {
    addGameToCart(item)
  }

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
              isGameInCart(item) ? styles.homeItemContentBuyBtnInCart : ''
            }`}
            onClick={gameToCart}
          >
            {isGameInCart(item) ? 'Удалить' : 'В корзину'}
						{/* В корзину */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
