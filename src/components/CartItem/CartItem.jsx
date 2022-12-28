import styles from './CartItem.module.scss'

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <img src="images/items/forza5.jpg" alt="item-img" width={225} />
        <div className={styles.cartItemContent}>
          <h4 className={styles.cartItemContentName}>
            NameNameNameNameNameNameName
          </h4>
          <span className={styles.cartItemContentCost}>2200 руб.</span>
        </div>
      </div>
      <div className={styles.cartItemRight}>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default CartItem
