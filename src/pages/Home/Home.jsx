import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'

function Home({ filteredGames }) {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        {filteredGames.map((game) => (
          <HomeItem {...game} key={game.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
