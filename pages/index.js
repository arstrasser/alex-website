import Link from 'next/link';
import Layout from '../components/layout';

const Page = (props) => (
  <div className="Page">
    <div>
      {props.children}
    </div>
    <style jsx>{`
      .Header {
        display: flex;
        flex-direction: row;
        height: 60px;
        width: 100%;
        background-color:rgba(0,0,0,0.7);
        padding:5px;
        top:0;
        position:fixed;
      }
    `}</style>
  </div>
);

const Index = () => (
  <Layout title="Alex Strasser">
    <div>
      <Page></Page>
    </div>
  </Layout>
);

export default Index;
