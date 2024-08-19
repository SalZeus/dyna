import styles from "./contacto.module.scss"

export default function Contact(){
    return(
        <main>
            <section className={styles.contact}>
                <h1 className={styles.contact__title}>Contáctanos</h1>
                <h1 className={styles.contact__title}>Si quieres contactarnos puedes usar nuestro Whatsapp</h1>
                <div>
                    <input className={styles.contact__inputHalf} type="text" name="firstName" placeholder="tu nombre"/>
                    <input className={styles.contact__inputHalf} type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </div>
                <input className={styles.contact__inputHalf} type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$"/>
                <div>
                    <input className={styles.contact__inputfull}type="text" name="message" placeholder="Compartenos tu mensaje"/>
                </div>
                <input className={styles.contact__submit} type="submit" name="submit" value="Crear cuenta" />
            </section>
        </main>
    )
}