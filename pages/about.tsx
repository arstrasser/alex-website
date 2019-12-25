import Layout from '../components/layout';
import Slide from '../components/slide';
import Panel from '../components/panel';
import AvatarPanel from '../components/avatar-panel';

const About = () => (
  <Layout title="Alex Strasser">
    <Slide>
      <AvatarPanel></AvatarPanel>
      <Panel>
        <div className="about-rightpanel">
          <p>Like what you've seen?</p>
          <p>Or still have questions?</p>
          <p>Feel free to reach out!</p>
        </div>
        <style jsx> {`
          .about-rightpanel {
            margin-top:30%;
          }

          .about-rightpanel > p {
            font-size: 1.5em;
            text-align:center;
          }
        `}</style>
      </Panel>
    </Slide>
  </Layout>
);

export default About;
