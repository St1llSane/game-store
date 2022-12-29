import styles from './CartItem.module.scss'

function CartItem({ id, img, name, price, deleteGameFromCart }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <a href="#">
          <img src={img} alt="item-img" width={205} />
        </a>
        <div className={styles.cartItemContent}>
          <h4 className={styles.cartItemContentName}>{name}</h4>
          <span className={styles.cartItemContentCost}>{price} руб.</span>
        </div>
      </div>
      <div className={styles.cartItemRight}>
        <button onClick={() => deleteGameFromCart(id)}>Удалить</button>
      </div>
    </div>
  )
}

export default CartItem
