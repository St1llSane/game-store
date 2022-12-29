import { Link } from 'react-router-dom'
import { IoArrowUndoOutline } from 'react-icons/io5'
import styles from './PageTop.module.scss'

function PageTop(props) {
  return (
    <div className={styles.pageTop}>
      <Link exact="true" to="/">
        <button className={styles.pageTopBtn}>
          <IoArrowUndoOutline />
        </button>
      </Link>
      <div className={styles.pageTopText}>{props.children}</div>
    </div>
  )
}

export default PageTop
