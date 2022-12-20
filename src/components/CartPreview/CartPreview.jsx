import styles from './CartPreview.module.scss'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function CartPreview() {
  return (
    <div className={styles.cartPreview}>
      <ul className={styles.cartPreviewList}>
        <li className={styles.cartPreviewListItem}>
          <img src="images/items/codmw2022.jpg" alt="game_img" />
          <div className={styles.cartPreviewListItemContent}>
            <div className={styles.cartPreviewListItemInfo}>
              <h6>Call of Duty MW2 (2022)</h6>
              <span>2990 руб.</span>
            </div>
            <button>
              <BsPlusLg />
            </button>
          </div>
        </li>
      </ul>
      <div className={styles.cartPreviewTotal}>
        <ul className={styles.cartPreviewTotalInfo}>
          <li className={styles.cartPreviewTotalInfoItem}>
            <div>Товаров:</div>
            <span></span>
            <div>2 шт.</div>
          </li>
          <li className={styles.cartPreviewTotalInfoItem}>
            <div>К оплате:</div>
            <span></span>
            <div>4000 руб.</div>
          </li>
        </ul>
        <Link to="/cart">
          <button>Перейти в корзину</button>
        </Link>
      </div>
    </div>
  )
}

export default CartPreview
