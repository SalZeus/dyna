"use client"
import styles from "../sass/global-error.module.scss";
import Image from "next/image";
import { MotionDiv } from "app/components/home/MotionDiv/MotionDiv";
import {motion} from "framer-motion";
import Link from "next/link"

export default function GlobalError({ reset }: ErrorPageProps){

    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };

    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Hmmm.. algo explotó de nuestro lado</h1>
            <MotionDiv
                 initial={{ scale: 0 }}
                 animate={{ rotate: 360, scale: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
                 }}
            >
                <image
                   src="images/error.jpg"
                   width={100}
                   height={100}
                   alt="something fishy about this error"     
                />
                <p className={styles.Error_message}>No desesperes amiguito</p>
                <button onClick={reset} className={styles.Error__button}>Pegale un golpecito al servidor ✨</button>
            </MotionDiv>
        <MotionDiv className="container">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="item"
                width="200px"
                height="200px"
                >
                <motion.path
                    d="M0 0h16v12h-2v4H2v-4H0V0zm2 2v8h2v4h1v-2h2v2h2v-2h2v2h1v-4h2V2H2zm6 6l1.414 1.414-.707.707L8 9.414l-.707.707-.707-.707L8 8zm2-3h2v2h-2V5zM4 5h2v2H4V5z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>    
        </MotionDiv>
        <p>Parece que seguimos teniendo algo de dificultades, intenta ir a nuestra pagina principal de nuevo <Link href="/">Home</Link></p>
        </main>
    )
}