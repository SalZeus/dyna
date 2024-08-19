import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Hero=()=>{
    return(
        <section className={styles.Hero}>
            
            <div className={styles.title}>
                <h1>DYNA</h1>
            </div>
                <h3>Soluciones de iluminación</h3>
            <section className={styles.heroSupport}>
                <div>
                    <div>
                        <Image 
                            alt="" 
                            src="/images/illumination.png"       
                            width={500}
                            height={500}
                            priority={false}>
                        </Image>
                    </div>
                    <h2>Eleva tu iluminación a nivel internacional y has de tu hogar o negocio algo moderno, estilizado y personalizado para ti.</h2>
                </div>
                <div>
                    <Image alt="corredor" src="/images/corredor.png" width={500} height={500}>

                    </Image>
                    <h2>Cada detalle nos apasiona, y lo hacemos notar.</h2>
                </div>
            </section>
                <Link href="/store"><button><div>Revisa nuestros productos!</div></button></Link>
        </section>
    )
}