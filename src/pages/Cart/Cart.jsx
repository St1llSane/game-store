import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'
import PageTop from '../../components/UI/PageTop'
import CartTotal from '../../components/UI/CartTotal'

function Cart({ cartGames, deleteGameFromCart }) {
  return (
    <div className={styles.cart}>
      <PageTop>Корзина</PageTop>
      {cartGames.length > 0 ? (
        <div className={styles.cartContent}>
          <ul className={styles.cartItems}>
            {cartGames.map((cartGame) => (
              <CartItem
                {...cartGame}
                deleteGameFromCart={deleteGameFromCart}
                key={cartGame.id}
              />
            ))}
          </ul>
          <div className={styles.cartTotal}>
            <CartTotal cartGames={cartGames} />
          </div>
        </div>
      ) : (
        <div className={styles.cartEmpty}>
          <img src="images/empty-box.png" width={200} alt="empty-box" />
          <span>{`Корзина пуста :(`}</span>
        </div>
      )}
    </div>
  )
}

export default Cart
