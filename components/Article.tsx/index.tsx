import React from 'react';
import styles from './styles.module.css';

export const Article: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);
