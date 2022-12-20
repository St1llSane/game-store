import styles from './Cart.module.scss'

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
					<h4 className={styles.cartItemName}>Name</h4>
				</div>
      </div>
    </div>
  )
}

export default Cart
