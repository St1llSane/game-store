import styles from './CartTotal.module.scss'

function CartTotal({ cartGames, children }) {
  let cartTotalPrice = 0
  if (cartGames.length > 0) {
    cartTotalPrice = cartGames.reduce((summ, game) => summ + game.price, 0)
  }

  return (
    <div className={styles.cartTotal}>
      <ul className={styles.cartTotalInfo}>
        <li className={styles.cartTotalInfoItem}>
          <div>Товаров:</div>
          <span></span>
          <div>{cartGames.length} шт.</div>
        </li>
        <li className={styles.cartTotalInfoItem}>
          <div>К оплате:</div>
          <span></span>
          <div>{cartTotalPrice} руб.</div>
        </li>
      </ul>
      {cartGames.length > 0 && (
        children
      )}
    </div>
  )
}

export default CartTotal
