import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <ClipLoader color="white" />
    </div>
  );
};
