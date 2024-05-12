"use client"
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Description.module.sass';


export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx =classNames.bind(styles);

    const buttonStyles = cx("button", {
        "Description__button--border": hasBorder,
    })

    console.log(buttonStyles);

    return(
        <section className={styles.Description}>
        <button className={buttonStyles} onClick={handleClick} title="button">
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.png"
                    alt="products marketplace"
                    fill
                    priority={false}
                />
            </div>
        </button>
        <div className={styles.Description__text}>
            <h2>Soluciona todo tipo de problemas de iluminación!</h2>
            <p>Dyna es un distribuidor legal y autorizado de Mercury,
                uno de los mas grandes y variados fabricantes de iluminación
                a nivel mundial!</p>
        </div>
    </section>
    )
}