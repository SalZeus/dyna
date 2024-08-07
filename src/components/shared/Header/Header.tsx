import Link from "next/link"
import styles from "./Header.module.scss";
import { cookies } from "next/headers";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const Header = async () =>{
  const customer = await validateAccessToken()
  // const cookiesStore = cookies()
  // const token = cookiesStore.get("accessToken")?.value

  console.log("Customer en Header:", customer)  // Añade este log para verificar el customer

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
            {customer?.firstName ? (
              <p>Hola {customer.firstName}!</p>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </nav>
        </header>
    )
}