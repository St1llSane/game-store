import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PageTop from '../../components/UI/PageTop'
import InCartBtn from '../../components/UI/InCartBtn'
import styles from './GamePage.module.scss'

function GamePage({ games, addGameToCart, isGameInCart }) {
  const [game, setGame] = useState()

  // TODO Доделать добавление товара в корзину по нажатию на кнопку
  const item = games.find((obj) => +obj.id === +game.id)
  if (game) {
    console.log(game)
  }
  console.log(item)

  const { id } = useParams()

  useEffect(() => {
    async function fetchingGame() {
      try {
        const { data } = await axios.get(
          'https://639df5493542a2613053e993.mockapi.io/games/' + id
        )
        setGame(data)
      } catch (error) {
        alert('Ошибка при загрузке страницы игры')
      }
    }
    fetchingGame()
  }, [])

  if (!game) {
    return 'Загрузка...'
  }

  return (
    <section className={styles.GamePage}>
      <PageTop>Страница игры</PageTop>
      <div className={styles.GamePageContent}>
        <div className={styles.GamePageContentLeft}>
          <div className={styles.GamePageContentLeftVideo}></div>
          {/* <iframe
            width="560"
            height="315"
            src={game.video}
            title="YouTube video player"
            allowFullScreen
          ></iframe> */}
        </div>
        <div className={styles.GamePageContentRight}>
          <h4 className={styles.GamePageContentRightName}>{game.name}</h4>
          <p className={styles.GamePageContentRightDescr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            temporibus harum voluptatibus nihil quia sit atque et beatae
            architecto consequuntur!
          </p>
          <ul className={styles.GamePageContentRightGenres}>
            <h6>Жанры:</h6>
            {game.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <div className={styles.GamePageContentRightBtn}>
            <InCartBtn
              addGameToCart={addGameToCart}
              isGameInCart={isGameInCart}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamePage
