import Link from 'next/link'
// import ShoppingCart from '../ShoppingCart'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.scss'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { MotionDiv } from 'app/components/home/MotionDiv/MotionDiv'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {ssr: false})

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              <MotionDiv whileHover={{scale: 2}}>
                <Image src="/images/bombillaNaranja.png" alt="bombillito" width={25} height={27}></Image>
              </MotionDiv>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              Home
            </Link>
          </li> */}
          <li>
            <Link href="/store">
              <MotionDiv  whileHover={{scale: 2}}>
                <Image src="/images/fancyStore.png" alt="Store" width={35} height={30}></Image>
              </MotionDiv>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
            <MotionDiv whileHover={{scale: 2}}>
              <Image src="/images/contactUs.png" alt="contáctanos" width={35} height={30}></Image>
            </MotionDiv>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
      {customer?.firstName ? (
        <Link href="/my-account">Hola {customer.firstName}!</Link>
      ) : (
        <div className={styles.Header__user}>
          <Link href="/login">Inicia sesión</Link>
          <Link href="/signup">Crea tu cuenta</Link>
        </div>
      )}
      <NoSSRShoppingCart />
      </div>
    </header>)
}