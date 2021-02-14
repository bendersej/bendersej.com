import * as React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import Link from 'next/link';

interface Props {
  postTitle?: string;
}

export const BlogHeader: React.FunctionComponent<Props> = ({ postTitle }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="/img/chick.png" className={styles.logo} />
        </a>
      </Link>

      <h1 className={styles.breadCrumb}>
        <Link href="/blablabla">
          <a
            className={classnames(styles.originLink, {
              [styles.isHoverable]: postTitle !== undefined,
            })}>
            Blablabla
          </a>
        </Link>
        {postTitle && (
          <div>
            <span className={styles.separator}>▹</span>
            <span>{postTitle}</span>
          </div>
        )}
      </h1>
    </header>
  );
};
