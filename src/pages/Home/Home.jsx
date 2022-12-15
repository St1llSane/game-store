import styles from './Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeItem}>
        <img
          className={styles.homeItemImg}
          src="images/items/forza5.jpg"
          alt="Item image"
        />
        <div className={styles.homeItemContent}>
          <h3 className={styles.homeItemContentTitle}>Forza Horizon 5</h3>
          <ul className={styles.homeItemContentGenres}>
            <li>
              <button>Гонки</button>
            </li>
            <li>
              <button>Симулятор</button>
            </li>
            <li>
              <button>Открытый мир</button>
            </li>
          </ul>
          <div className={styles.homeItemContentBuy}>
            <span>1800 руб.</span>
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
