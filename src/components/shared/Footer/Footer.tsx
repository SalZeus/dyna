import styles from './Footer.module.scss';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Dyna: soluciones de ilumniación © {new Date().getFullYear()}</p>
    </footer>
  )
};