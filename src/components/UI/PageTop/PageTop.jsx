import styles from './PageTop.module.scss'

function PageTop(props) {
  return <div className={styles.pageTop}>{props.children}</div>
}

export default PageTop
