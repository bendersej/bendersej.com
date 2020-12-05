import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;

          padding: 30px;

          line-height: 1.6;
        }
      `}</style>
    </>
  );
}

export default App;
