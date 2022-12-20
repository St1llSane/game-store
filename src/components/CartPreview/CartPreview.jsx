import styles from './CartPreview.module.scss'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function CartPreview({ cartGames }) {
  return (
    <div className={styles.cartPreview}>
      <ul className={styles.cartPreviewList}>
        {cartGames.map((cartGame) => (
          <li className={styles.cartPreviewListItem} key={cartGame.id}>
            <img src={cartGame.img} alt="game_img" />
            <div className={styles.cartPreviewListItemContent}>
              <div className={styles.cartPreviewListItemInfo}>
                <h6>{cartGame.name}</h6>
                <span>{cartGame.price} руб.</span>
              </div>
              <button>
                <BsPlusLg />
              </button>
            </div>
          </li>
        ))}
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
