import Link from 'next/link';
import Head from 'next/head'

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <div className="main-container">
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
    </Head>
    <Header />
    <div className="content" id="scroll-container">
      {props.children}
      <Footer />
    </div>
    <style jsx global>{`
        html, body {
          margin:0;
          padding:0;
          font-family: helvetica
        }
        .main-container {
          width:100vw;
          height:100vh;
          overflow:hidden;
        }
        .content {
          width:100%;
          height:calc(100% - 70px);
          overflow-y: auto;
          overflow-x: hidden;
          background:black;
        }

      `}</style>
  </div>
);

export default Layout;
