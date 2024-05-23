"use client"
import styles from "../sass/global-error.module.scss";
import Image from "next/image";
import { MotionDiv } from "app/components/home/MotionDiv/MotionDiv";

export default function GlobalError({ reset }: ErrorPageProps){
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Hmmm.. algo explotó de nuestro lado</h1>
            <MotionDiv
                 initial={{ scale: 0 }}
                 animate={{ rotate: 180, scale: 1 }}
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
        </main>
    )
}