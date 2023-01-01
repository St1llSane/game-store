import styles from './GamePage.module.scss'
import PageTop from '../../components/UI/PageTop'
import { useParams } from 'react-router-dom'

function GamePage() {
  const { name } = useParams()

  return (
    <section className={styles.GamePage}>
      <PageTop>Страница игры</PageTop>
      <h4>GamePage {name}</h4>
    </section>
  )
}

export default GamePage
