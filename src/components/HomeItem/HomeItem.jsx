import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import InCartBtn from '../UI/InCartBtn'
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

  return (
    <div className={styles.homeItem}>
      <Link to={`games/${id}`}>
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
          <InCartBtn
            item={item}
            addGameToCart={addGameToCart}
            isGameInCart={isGameInCart}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeItem
