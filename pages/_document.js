//@flow
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
         <style>
           {`
           body { 
             margin: 0;
             font-family: Inconsolata;
           } 
           `}
          </style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}

