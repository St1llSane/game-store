import { BiSearchAlt } from 'react-icons/bi'
import styles from './CartItem.module.scss'

function CartItem({ id, img, name, price, deleteGameFromCart }) {
  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <a href="#" className={styles.cartItemLeftImg}>
          <BiSearchAlt />
          <img src={img} alt="item-img" width={205} height={116} />
        </a>
        <div className={styles.cartItemContent}>
          <h4 className={styles.cartItemContentName}>{name}</h4>
          <span className={styles.cartItemContentCost}>{price} руб.</span>
        </div>
      </div>
      <div className={styles.cartItemRight}>
        <button onClick={() => deleteGameFromCart(id)}>Удалить</button>
      </div>
    </li>
  )
}

export default CartItem
