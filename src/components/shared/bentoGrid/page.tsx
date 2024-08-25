import styles from './BentoGrid.module.scss';
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from 'app/components/home/MotionDiv/MotionDiv';
import { easeInOut } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";

const majorMonoDisplay = Major_Mono_Display({
    weight: ["400"],
    subsets: ["latin-ext"],
    preload: true,
    style: "normal"
  })

const BentoGrid = () => {
  return (
    <section className={styles.section}>
        {/* <MotionDiv className={styles.title}
        initial={{ y: -80, scale: 0.5, opacity: 0.2 }}
        animate={{ y: [40, -40, 0], scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        drag="x" dragConstraints={{left: 100, right: 100}} dragSnapToOrigin
            >
                <h1 className={majorMonoDisplay.className}>DYNA</h1>
        </MotionDiv> */}
        <MotionDiv
        initial={{ y: -80, scale: 0.5, opacity: 0.1 }}
        animate={{ y: [-600, 100, 0], scale: [0, 1], opacity: [0.3, 0.5, 0.6, 0.8, 1], rotate: [0, 0, 0, 0, 360] }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1 }}>
                <h3 className={styles.title__h3}>Soluciones de iluminación</h3>
        </MotionDiv>
        <div className={styles.bentoGrid}>
        <MotionDiv 
        drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin 
        className={styles.bento1}
        whileHover={{scale: 1.2,zIndex:1 ,transition: {duration: 0.2, ease: "easeInOut"}}}
        >
            <Image
                alt="" 
                src="/images/gradientedLight.png"       
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: 'contain', // cover, contain, none
                }}
                priority={false}>
            </Image>
        </MotionDiv>
        <div className={styles.bento2}>
        <MotionDiv className={styles.title}
            initial={{ y: -80, scale: 0.5, opacity: 0.2 }}
            animate={{ y: [40, -40, 0], scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            drag="x" dragConstraints={{left: 100, right: 100}} dragSnapToOrigin
            >
                <h1 className={majorMonoDisplay.className}>DYNA</h1>
            </MotionDiv>
        </div>
        <MotionDiv 
            drag dragConstraints={{left: 100, right: 100}} 
            dragSnapToOrigin 
            whileHover={{scale: 1.2,zIndex:1 ,transition: {duration: 0.2, ease: "easeInOut"}}}
            className={styles.bento3}>
        <Image
                alt="" 
                src="/images/storeIconGlass.png"       
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: 'contain', // cover, contain, none
                }}
                priority={false}>
            </Image>
        </MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento4}>Bento 4</MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento5}>Bento 5</MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento6}>Bento 6</MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento7}>Bento 7</MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento8}>Bento 8</MotionDiv>
        <MotionDiv drag dragConstraints={{left: 100, right: 100}} dragSnapToOrigin className={styles.bento9}>Bento 9</MotionDiv>
        </div>
    </section>
  );
};

export default BentoGrid;
