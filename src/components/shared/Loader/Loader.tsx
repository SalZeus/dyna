import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.Loader}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
};