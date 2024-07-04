import styles from '../NoPage/NoPage.module.css'
const NoPage = () => {
  return (
    <div className={styles.no_page}>
      <div className={styles.no_page_content}>
      <h1>404</h1>
       <p>Sorry it looks like this page does not exist</p>
       </div>
    </div>
  )
}

export default NoPage
