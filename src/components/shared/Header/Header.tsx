import Link from "next/link"
import styles from "./Header.module.scss";

export const Header = () =>{
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
          </nav>
        </header>
    )
}