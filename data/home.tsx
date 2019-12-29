const options = [
  {
    name:"Student",
    header:"I am a Student",
    mainImage:"student1.jpg",
    listContent: (<div>
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
    </div>)
  },
  {
    name:"Maker",
    header:"I am a Maker",
    mainImage:"maker.jpg",
    listContent: (
      <div>
        <li>Love making things</li>
        <li>Dorm Automation projects</li>
        <li>3D modeling/printing projects</li>
        <li>Arduino/NodeMCU electronics</li>
        <li>Puzzle Boxes</li>
      </div>
    )
  },
  {
    name:"Coder",
    header:"I am a Coder",
    mainImage:"coding.jpg",
    listContent: (<div>
      <li>4 years of web development experience
        <ul>
          <li>Angular, React, Express</li>
          <li>Javascript, Typescript</li>
          <li>HTML, CSS, SCSS</li>
          <li>Backend: MongoDB, SQL, Django, Node.js</li>
        </ul>
      </li>
      <li>3 years of App Development (Ionic Framework)</li>
      <li>At least 2 years of experience in: Python, Java, C</li>
    </div>)
  },
  {
    name:"Engineer",
    header:"I am an Engineer",
    mainImage:"engineer3.jpg",
    listContent: (<div>
      <li>Wrote production monitoring software for Molex and deployed in China</li>
      <li>Pingry High School robotics
        <ul>
          <li>Increased team diversity and brought team to FTC and FRC worlds</li>
          <li>FRC Team 2577</li>
          <li>FTC Team 6069</li>
          <li>Team captain 2017-2019</li>
        </ul>
      </li>
      <li>4-H Lego Robotics 2010-2019</li>
    </div>)
  },
  {
    name:"Techie",
    header:"I am a Techie",
    mainImage:"tech.jpg",
    listContent: (<div>
      <li>Member of ABTech at Carnegie Mellon</li>
      <li>1 year experience with lighting design and programming</li>
      <li>Some experience with sound design</li>
    </div>)
  }
];

const imagePrefix = "/static/images/home/"

export { options, imagePrefix };
