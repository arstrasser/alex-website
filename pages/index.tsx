//import Link from 'next/link';
import Layout from '../components/layout';
import Slide from '../components/slide';
import ListPanel from '../components/list-panel';
import TitlePanel from '../components/title-panel';
import MainSlide from '../components/main-slide';

const Index = () => (
  <Layout title="Alex Strasser">
    <div>
      <MainSlide></MainSlide>
      <Slide anchor='0'>
        <TitlePanel>
          Student
        </TitlePanel>
        <ListPanel>
          <li>Attending Carnegie Mellon University</li>
          <li>Pursuing BS in Electrical and Computer Engineering</li>
          <li>Class of 2023</li>
          <li>Relevant Classes:</li>
        </ListPanel>
      </Slide>
      <Slide anchor='1'>
        <ListPanel>
          <div>
            <li>I have always loved to make things</li>
            <li>Home Automation</li>
            <li>3D printing</li>
            <li>Arduino/NodeMCU</li>
            <li>Puzzle Boxes</li>
          </div>
        </ListPanel>
        <TitlePanel>
          Maker
        </TitlePanel>
      </Slide>
      <Slide anchor='2'>
        <TitlePanel>
          Coder
        </TitlePanel>
        <ListPanel>
          <li>Attending Carnegie Mellon University</li>
          <li>Pursuing BS in Electrical and Computer Engineering</li>
          <li>Class of 2023</li>
          <li>Relevant Classes:</li>
        </ListPanel>
      </Slide>
      <Slide anchor='3'>
        <ListPanel>
          <div>
            <li>I have always loved to make things</li>
            <li>Home Automation</li>
            <li>3D printing</li>
            <li>Arduino/NodeMCU</li>
            <li>Puzzle Boxes</li>
          </div>
        </ListPanel>
        <TitlePanel>
          Engineer
        </TitlePanel>
      </Slide>
      <Slide anchor='4'>
        <TitlePanel>
          Techie
        </TitlePanel>
        <ListPanel>
          <li>Attending Carnegie Mellon University</li>
          <li>Pursuing BS in Electrical and Computer Engineering</li>
          <li>Class of 2023</li>
          <li>Relevant Classes:</li>
        </ListPanel>
      </Slide>
      <Slide anchor='5'>
        <ListPanel>
          <div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
        </ListPanel>
        <TitlePanel>
          About Me
        </TitlePanel>
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
