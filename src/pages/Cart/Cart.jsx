import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'
import PageTop from '../../components/UI/PageTop/PageTop'

function Cart() {
  return (
    <div className={styles.cart}>
      <PageTop>Cart Top</PageTop>
      <div className={styles.cartItems}>
        <CartItem />
      </div>
    </div>
  )
}

export default Cart
