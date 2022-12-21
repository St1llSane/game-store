import { BsPlusLg } from 'react-icons/bs'
import styles from './CartPreviewItem.module.scss'

function CartPreviewItem({
  id,
  img,
  name,
  price,
  count,
  minusCartGameCount,
  plusCartGameCount,
}) {
  return (
    <li className={styles.cartPreviewListItem} key={id}>
      <img src={img} alt="game_img" />
      <div className={styles.cartPreviewListItemContent}>
        <div className={styles.cartPreviewListItemInfo}>
          <h6>{name}</h6>
          <span>{price} руб.</span>
        </div>
        <button>
          <BsPlusLg />
        </button>
      </div>
      <div className={styles.cartPreviewListItemCount}>
        <button onClick={() => minusCartGameCount(id)}>
          <span>-</span>
        </button>
        <span className={styles.cartPreviewListItemCountNum}>{count}</span>
        <button onClick={() => plusCartGameCount(id)}>
          <span>+</span>
        </button>
      </div>
    </li>
  )
}

export default CartPreviewItem
