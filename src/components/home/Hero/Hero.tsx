import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { easeInOut } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";

const majorMonoDisplay = Major_Mono_Display({
    weight: ["400"],
    subsets: ["latin-ext"],
    preload: true,
    style: "normal"
  })

export const Hero=()=>{
    return(
        <section className={styles.Hero}>
            
            <MotionDiv className={styles.title}
            initial={{ y: -80, scale: 0.5, opacity: 0.2 }}
            animate={{ y: [40, -40, 0], scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            drag="x" dragConstraints={{left: 100, right: 100}} dragSnapToOrigin
            >
                <h1 className={majorMonoDisplay.className}>DYNA</h1>
            </MotionDiv>
            <MotionDiv
            initial={{ y: -80, scale: 0.5, opacity: 0.1 }}
            animate={{ y: [-600, 100, 0], scale: [0, 1], opacity: [0.3, 0.5, 0.6, 0.8, 1], rotate: [0, 0, 0, 0, 360] }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}>
                <h3>Soluciones de iluminación</h3>
            </MotionDiv>
            <section className={styles.heroSupport}>
                <div>
                    <div>
                        <Image 
                            alt="" 
                            src="/images/heroLighting.jpg"       
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