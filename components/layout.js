import Link from 'next/link';
import Head from 'next/head'

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
    </Head>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
        html, body {
          margin:0;
          padding:0;
        }
      `}</style>
  </div>
);

export default Layout;
