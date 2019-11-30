import Layout from '../components/layout';

const Resume = () => (
  <Layout title="Alex Strasser">
    <iframe src="/static/AlexStrasserResume.pdf" style={{width:"100%", height:"calc(100vh - 70px)", border:"none"}} />
  </Layout>
);

export default Resume;
