import styles from './styles.module.css';

export const Article: React.FunctionComponent = ({ children }) => (
  <article className={styles.article}>{children}</article>
);
