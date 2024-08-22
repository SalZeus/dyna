import styles from "./contacto.module.scss"
import { Major_Mono_Display } from "next/font/google"

const majorMonoDisplay = Major_Mono_Display({
    weight: ["400"],
    subsets: ["latin-ext"],
    preload: true,
    style: "normal"
  })

export default function Contact(){
    return(
        <main className={styles.contactSection}>
            <section className={styles.contact}>
                <div className={styles.contact__card}>
                <h1 className={styles.contact__title}>Contáctanos</h1>
                <h1 className={styles.contact__title}>Si quieres contactarnos puedes usar nuestro Whatsapp</h1>
                {/* <div>
                    <input className={styles.contact__inputHalf} type="text" name="firstName" placeholder="tu nombre"/>
                    <input className={styles.contact__inputHalf} type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </div>
                <input className={styles.contact__inputHalf} type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$"/>
                <div>
                    <input className={styles.contact__inputfull}type="text" name="message" placeholder="Compartenos tu mensaje"/>
                </div>
                <input className={styles.contact__submit} type="submit" name="submit" value="Crear cuenta" />
                </div> */}
                </div>
                <section>
                    <a href="https://wa.me/573127197249?text=Este%20es%20tu%20numero%de%orden">
                        <h1 className={majorMonoDisplay.className}>Contactanos Aca</h1>
                    </a>
                </section>
            </section>
        </main>
    )
}