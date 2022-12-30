import styles from './GamePage.module.scss'
import PageTop from '../../components/UI/PageTop/PageTop'

function GamePage() {
  return (
    <section className={styles.GamePage}>
			<PageTop>Страница игры</PageTop>
      <h4>GamePage</h4>
    </section>
  )
}

export default GamePage
