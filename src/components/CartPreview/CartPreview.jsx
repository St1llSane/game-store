import { Link } from 'react-router-dom'
import styles from './CartPreview.module.scss'
import CartPreviewItem from '../CartPreviewItem'
import CartTotal from '../UI/CartTotal'

function CartPreview({
  cartGames,
  isCartPreviewVisible,
  setIsCartPreviewVisible,
  deleteGameFromCart,
}) {
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
          <img src="images/empty-box.png" width={120} alt="empty-cart" />
          <span>{`Корзина пуста :(`}</span>
        </div>
      )}
      <div className={styles.cartPreviewTotal}>
        <CartTotal cartGames={cartGames}>
          <Link to="/cart">
            <button onClick={() => setIsCartPreviewVisible(false)}>
              Перейти в корзину
            </button>
          </Link>
        </CartTotal>
      </div>
    </div>
  )
}

export default CartPreview
