import * as React from 'react';
import NextHead from 'next/head';

const GOOGLE_ANALYTICS_TAG = process.env.NODE_ENV === 'production' ? process.env.GOOGLE_ANALYTICS_TAG : null;

const initGa = () => {
  if (GOOGLE_ANALYTICS_TAG === null) {
    console.warn('GOOGLE_ANALYTICS_TAG is not defined');
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(_1: any, _2: any) {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', GOOGLE_ANALYTICS_TAG);
};

interface Props {
  description: string;
  url: string;
  ogImage?: string;
  title: string;
}

export const Head: React.FunctionComponent<Props> = ({ description, url, title, ogImage }) => {
  React.useEffect(() => {
    if (typeof window === undefined) {
      return;
    }

    initGa();
  }, []);

  return (
    <React.Fragment>
      <NextHead>
        <title>{title ?? ''}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" sizes="192x192" href="/touch-icon.png" />
        <link rel="apple-touch-icon" href="/touch-icon.png" />
        <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
        {GOOGLE_ANALYTICS_TAG !== null && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TAG}`}></script>
        )}
      </NextHead>
      <style jsx global>{`
        body {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          margin: 0;
          max-width: 768px;
          margin: 0 auto;
          line-height: 1;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        p {
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 0;
          font-weight: 400;
        }

        circle,
        path {
          transition: 0.3s linear;
        }

        .tooltip {
          display: inherit;
          position: relative;

          &:hover {
            z-index: 1;

            &::after,
            &::before {
              opacity: 1;
              transition-delay: 0.2s;
            }
          }

          &:before {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;

            border-bottom: 5px solid black;
            content: '';

            position: absolute;
            top: 130%;
            left: 0;
            right: 0;
            margin: -5px auto 0 auto;

            pointer-events: none;
            opacity: 0;
          }

          &:after {
            box-sizing: border-box;
            background: black;
            color: white;
            padding: 5px;
            border-radius: 3px;
            content: attr(aria-label);
            display: flex;

            font-size: 14px;
            line-height: 1.2;
            position: absolute;
            left: 0;
            right: 0;
            top: 130%;
            margin: 0 auto;
            min-width: 100px;
            pointer-events: none;
            opacity: 0;
          }
        }

        @media print {
          body {
            margin-top: 20px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
