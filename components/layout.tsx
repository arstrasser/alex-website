import Head from 'next/head';
import Header from './header';
import Footer from './footer';

import './main.scss';

const Layout = (props:{title:string, children:any}) => (
  <div className="main-container">
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
      <script type="text/javascript" src="/static/scripts/mato.js"></script>
    </Head>
    <Header />
    <div className="content" id="scroll-container">
      {props.children}
    </div>
  </div>
);

export default Layout;
