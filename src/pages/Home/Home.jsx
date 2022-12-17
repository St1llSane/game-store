import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'

function Home({ games }) {
  return (
    <div className={styles.home}>
      {games.map((game) => (
        <HomeItem
          img={game.img}
          name={game.name}
          genres={game.genres}
          price={game.price}
          key={game.id}
        />
      ))}
    </div>
  )
}

export default Home
