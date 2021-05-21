import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Gyaku&nbsp;-&nbsp;Hyotei</h1>

      <p className={styles.description}>
        このページは Titech Info の姉妹ページです。ここに、説明を書きます。テスト、テスト、テスト
      </p>
    </div>
  )
}

export default Header