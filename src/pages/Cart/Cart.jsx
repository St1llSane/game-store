import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'
import PageTop from '../../components/UI/PageTop/PageTop'

function Cart({ cartGames, deleteGameFromCart }) {
  return (
    <div className={styles.cart}>
      <PageTop>Корзина</PageTop>
      <div className={styles.cartItems}>
        {cartGames.map((cartGame) => (
          <CartItem
            {...cartGame}
            deleteGameFromCart={deleteGameFromCart}
            key={cartGame.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Cart
