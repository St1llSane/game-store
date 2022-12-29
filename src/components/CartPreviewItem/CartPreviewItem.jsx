import { BsPlusLg } from 'react-icons/bs'
import styles from './CartPreviewItem.module.scss'

function CartPreviewItem({ id, img, name, price, deleteGameFromCart }) {
  return (
    <li className={styles.cartPreviewListItem} key={id}>
      <img src={img} alt="game_img" />
      <div className={styles.cartPreviewListItemContent}>
        <div className={styles.cartPreviewListItemInfo}>
          <h6>{name}</h6>
          <span>{price} руб.</span>
        </div>
        <button onClick={() => deleteGameFromCart(id)}>
          <BsPlusLg />
        </button>
      </div>
    </li>
  )
}

export default CartPreviewItem
