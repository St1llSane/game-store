import styles from './Home.module.scss'
import HomeItem from '../../components/HomeItem'

function Home() {
  return (
    <div className={styles.home}>
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
    </div>
  )
}

export default Home
