import styles from './MyAccount.module.scss'

export default function Layout({
  children,
  userInfo,
  ordersInfo,
}: {
  children: React.ReactNode
  userInfo: React.ReactNode
  ordersInfo: React.ReactNode
}) {
  return (
<div className={styles.MyAccount}>
      {children}
      <main className={styles.MyAccount__panels}>
        {userInfo}
        {ordersInfo}
      </main>
    </div>
  )
}