import Link from 'next/link'
// import ShoppingCart from '../ShoppingCart'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.scss'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {ssr: false})

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              <Image src="/images/bombillaNaranja.png" alt="bombillito" width={25} height={27}></Image>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              Home
            </Link>
          </li> */}
          <li>
            <Link href="/store">
              Tienda
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
      {customer?.firstName ? (
        <Link href="/my-account">Hola {customer.firstName}!</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
      <NoSSRShoppingCart />
      </div>
    </header>)
}