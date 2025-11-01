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
    <Link href={href} className={styles.preview}>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <section>
        <p>{content}</p>
      </section>
    </Link>
  );
};

const Blog = () => (
  <>
    <Head title="bendersej – blog" url="https://bendersej.com" description="Benjamin André-Micolon" />
    <div className="blog">
      <BlogHeader />
      <BlogPostPreview href="/blog" title="" date="" content="" />
    </div>
    <style jsx>
      {`
        .blog {
          padding: 30px 0;
        }
      `}
    </style>
  </>
);

export default Blog;
