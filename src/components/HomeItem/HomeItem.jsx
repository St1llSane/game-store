import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styles from './HomeItem.module.scss'

function HomeItem({
  id,
  img,
  name,
  genres,
  price,
  setGamesByGenres,
  addGameToCart,
  isGameInCart,
}) {
  const item = { id, parentId: id, img, name, price }

  // const navigate = useNavigate()
  // function navigateTo() {
  // 	navigate(`/game/${item.name}`)
  // }

  return (
    <div className={styles.homeItem}>
      <Link to={`games/${name}`}>
        <button className={styles.homeItemImg}>
          <BiSearchAlt />
          <img className={styles.homeItemImg} src={img} alt="Item image" />
        </button>
      </Link>
      <div className={styles.homeItemContent}>
        <h3 className={styles.homeItemContentTitle}>{name}</h3>
        <ul className={styles.homeItemContentGenres}>
          {genres.map((genre) => (
            <li key={genre}>
              <button onClick={(e) => setGamesByGenres(e.target.innerText)}>
                {genre}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.homeItemContentBuy}>
          <span>{price} руб.</span>
          <button
            className={`${styles.homeItemContentBuyBtn} ${
              isGameInCart(item) ? styles.homeItemContentBuyBtnInCart : ''
            }`}
            onClick={() => addGameToCart(item)}
          >
            {isGameInCart(item) ? 'Удалить' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeItem
