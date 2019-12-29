import Link from 'next/link';
import Layout from '../components/layout';
import Slide from '../components/slide';
import ListPanel from '../components/list-panel';
import TitlePanel from '../components/title-panel';
import MainSlide from '../components/main-slide';
import { options, imagePrefix } from '../data/home';

const Index = () => (
  <Layout title="Alex Strasser">
    <div>
      <MainSlide></MainSlide>
      {options.map((val, index) => (
        <Slide key={index} anchor={""+index} reverse={index%2 == 1}>
          <TitlePanel background={"url("+imagePrefix+val.mainImage+")"}>
            {val.name}
          </TitlePanel>
          <ListPanel>
            {val.listContent}
          </ListPanel>
        </Slide>
      ))}
      <Slide anchor={""+options.length} reverse>
        <TitlePanel background={"url("+imagePrefix+"team.jpg"+")"}>
          About Me
        </TitlePanel>
        <ListPanel>
          <div>
            <li>Love of learning</li>
            <li>Desire to make a difference</li>
            <li>7 years of Chinese</li>
            <li><Link href="/about"><a>Contact me</a></Link></li>
          </div>
        </ListPanel>
      </Slide>
    </div>
    <style jsx>{`
      li {
        text-align:left;
      }
    `}</style>
  </Layout>
);

export default Index;
