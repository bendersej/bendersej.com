import Head from 'next/head';

export default (props) => (
  <Head>
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
    <style jsx global>{`
      body {
        font-family: 'Inconsolata', monospace;
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
  </Head>
);
