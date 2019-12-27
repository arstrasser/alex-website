import Link from 'next/link';
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
          <li>Relevant Classes:
            <ul>
              <li>Intro to ECE</li>
              <li>Principles of Imperative Computation</li>
              <li>Concepts of Mathematics</li>
            </ul>
          </li>
        </ListPanel>
      </Slide>
      <Slide anchor='1' reverse>
        <TitlePanel>
          Maker
        </TitlePanel>
        <ListPanel>
          <div>
            <li>I have always loved to make things</li>
            <li>Dorm Automation projects</li>
            <li>3D modeling/printing projects</li>
            <li>Arduino/NodeMCU electronics</li>
            <li>Puzzle Boxes</li>
          </div>
        </ListPanel>
      </Slide>
      <Slide anchor='2'>
        <TitlePanel>
          Coder
        </TitlePanel>
        <ListPanel>
          <li>Significant Web development experience
            <ul>
              <li>Angular, React, Express, Node.js</li>
              <li>Javascript, Typescript</li>
              <li>HTML, CSS, SCSS</li>
              <li>Backend: MongoDB, SQL, Django</li>
            </ul>
          </li>
          <li>App Development (Ionic Framework)</li>
          <li>Significant experience in: Python, Java, C</li>
        </ListPanel>
      </Slide>
      <Slide anchor='3' reverse>
        <TitlePanel>
          Engineer
        </TitlePanel>
        <ListPanel>
          <div>
            <li>Worked for Molex fiberoptic division and traveled to China to implement product</li>
            <li>Pingry High School robotics
              <ul>
                <li>Increased team diversity and brought team to FTC and FRC worlds</li>
                <li>FRC Team 2577</li>
                <li>FTC Team 6069</li>
                <li>Team captain 2017-2019</li>
              </ul>
            </li>
            <li>4-H Lego Robotics 2010-2019</li>
          </div>
        </ListPanel>
      </Slide>
      <Slide anchor='4'>
        <TitlePanel>
          Techie
        </TitlePanel>
        <ListPanel>
          <li>Joined ABTech at Carnegie Mellon</li>
          <li>Some experience with lighting design and programming</li>
          <li>Some experience with sound design</li>
        </ListPanel>
      </Slide>
      <Slide anchor='5' reverse>
        <TitlePanel>
          About Me
        </TitlePanel>
        <ListPanel>
          <div>
            <li>I love learning new things</li>
            <li>I want to make a difference</li>
            <li>High school varsity track athlete</li>
            <li>Limited proficiency in Chinese</li>
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
