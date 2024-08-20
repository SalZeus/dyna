import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { easeInOut } from "framer-motion";

export const Hero=()=>{
    return(
        <section className={styles.Hero}>
            
            <MotionDiv className={styles.title}
            initial={{ x: -800, scale: 0.5 }}
            animate={{ x: [-400, 400, 0], scale: [0, 3, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            drag="x" dragConstraints={{left: 100, right: 100}} dragSnapToOrigin
            >
                <h1>DYNA</h1>
            </MotionDiv>
            <MotionDiv
            initial={{ x: -800, scale: 0.5 }}
            animate={{ x: [-600, 100, 0], scale: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}>
                <h3>Soluciones de iluminación</h3>
            </MotionDiv>
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