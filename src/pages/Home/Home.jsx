import { games } from '../../data/games'
import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'

function Home() {
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
      {/* <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem /> */}
    </div>
  )
}

export default Home
