import { Link } from 'react-router-dom'
import styles from './CartPreview.module.scss'
import CartPreviewItem from '../CartPreviewItem'

function CartPreview({ isCartPreviewVisible, cartGames, deleteGameFromCart }) {
  let cartTotalPrice = 0
  if (cartGames.length > 0) {
    cartTotalPrice = cartGames.reduce((summ, game) => summ + game.price, 0)
  }

  return (
    <div
      className={`${styles.cartPreview} ${
        isCartPreviewVisible ? styles.cartPreviewActive : ''
      }`}
    >
      {cartGames.length > 0 ? (
        <ul className={styles.cartPreviewList}>
          {cartGames.map((cartGame) => (
            <CartPreviewItem
              {...cartGame}
              deleteGameFromCart={deleteGameFromCart}
              key={cartGame.id}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.cartPreviewEmpty}>
          <img src="images/empty-box.png" width={120} alt="empty-box" />
          <span>{`Корзина пуста :(`}</span>
        </div>
      )}

      <div className={styles.cartPreviewTotal}>
        <ul className={styles.cartPreviewTotalInfo}>
          <li className={styles.cartPreviewTotalInfoItem}>
            <div>Товаров:</div>
            <span></span>
            <div>{cartGames.length} шт.</div>
          </li>
          <li className={styles.cartPreviewTotalInfoItem}>
            <div>К оплате:</div>
            <span></span>
            <div>{cartTotalPrice} руб.</div>
          </li>
        </ul>
        {cartGames.length > 0 && (
          <Link to="/cart">
            <button>Перейти в корзину</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default CartPreview
