import styles from "./Hero.module.scss";
import Link from "next/link";

export const Hero=()=>{
    return(
        <section className={styles.Hero}>
            <h1>Dyna 
            <br /> Soluciones de iluminación</h1>
            <h2>Eleva tu iluminación a nivel internacional y has de tu hogar o negocio algo moderno, estilizado y personalizado para ti.</h2>
            <h2>Cada detalle nos apasiona, y lo hacemos notar.</h2>
            <Link href="/store"><button><div>Revisa nuestros productos!</div></button></Link>
        </section>
    )
}