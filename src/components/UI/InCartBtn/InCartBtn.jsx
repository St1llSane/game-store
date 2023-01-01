import styles from './InCartBtn.module.scss'

function InCartBtn({ item, addGameToCart, isGameInCart }) {
  return (
    <button
      className={`${styles.inCartBtn} ${
        isGameInCart(item) ? styles.inCartBtnCart : ''
      }`}
      onClick={() => addGameToCart(item)}
    >
      {isGameInCart(item) ? 'Удалить' : 'В корзину'}
    </button>
  )
}

export default InCartBtn
