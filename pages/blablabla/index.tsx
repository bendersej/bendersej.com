import Link from 'next/link';
import React from 'react';
import { BlogHeader } from '../../components/BlogHeader';
import { Head } from '../../components/Head';

import styles from './styles.module.css';

const BlogPostPreview: React.FunctionComponent<{
  title: string;
  date: string;
  content: string;
  href: string;
}> = ({ href, title, date, content }) => {
  return (
    <Link href={href}>
      <a className={styles.preview}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <section>
          <p>{content}</p>
        </section>
      </a>
    </Link>
  );
};

const Blablabla = () => (
  <>
    <Head
      title="bendersej – blablabla"
      url="https://bendersej.com"
      description="Benjamin André-Micolon"
    />
    <BlogHeader />
    <BlogPostPreview
      href="/blablabla/pourquoi-l-estonie"
      title="Pourquoi l'Estonie ?"
      date="5 Décembre 2020"
      content="On me pose régulièrement cette question. Des Estoniens, étonnés de voir un étranger vivre de son plein gré dans leur petit pays, ou bien encore des Français incrédules qui..."
    />
  </>
);

export default Blablabla;
