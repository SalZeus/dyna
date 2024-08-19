import styles from './Footer.module.scss';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Dyna: soluciones de ilumniación © {new Date().getFullYear()}</p>
      Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
    </footer>
  )
};