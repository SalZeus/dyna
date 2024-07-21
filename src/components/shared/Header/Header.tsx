import Link from "next/link"
import styles from "./Header.module.scss";
import { cookies } from "next/headers";

export const Header = () =>{
  const cookiesStore = cookies()
  const token = cookiesStore.get("accessToken")?.value

    return(
        <header>
          <nav className={styles.navbar}>
            <ul className={styles.navItems}>
              <Link href="/">
                <li className={styles.navLink}>Home</li>
              </Link>
              <Link href="/store">
                <li className={styles.navLink}>Store</li>
              </Link>
            </ul>
            {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
          </nav>
        </header>
    )
}