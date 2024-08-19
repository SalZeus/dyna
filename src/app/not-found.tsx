import Image from "next/image";
import Link from "next/link";
import styles from 'app/scss/not-found.module.scss'

export const dynamic = "force-dynamic"

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image
        src="/images/404.jpg"
        alt="404"
        width={1000}
        height={700}
      />
      <h2 className={styles.NotFound__subtitle}>
        ¡Uy, parece que el enlace se enojó!
      </h2>
      <p className={styles.NotFound__description}>Pero nuestra tienda está abierta las 24/7</p>
      <Link className={styles.NotFound__link} href="/store">
        ¡Rápido, corre! y... ¡Vamos de compras!
      </Link>
    </main>
  );
}