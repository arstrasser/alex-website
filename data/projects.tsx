/*
Project Format
  {
    name: <Project name>,
    short: <Short featured description>,
    description: <Longer description in popup>,
    //First Picture is feature photo
    pictures: <Array of URLs of pictures to display in popup. First picture is feature photo>,
    tags:<Array of tags for the project>
  }
*/
const imagePrefix = "/static/images/projects/";

const tags:string[] = ["CS", "Maker", "Volunteer", "Work"];

const projects:Array<{
    name:string,
    short:string,
    description:string,
    pictures:string[],
    tags:string[],
    links?:{text:string, url:string}[]
  }> =
[
  {
    name:"Pingry App",
    short: "App to organize classes and school information for my high school.",
    description: "",
    links: [],
    pictures: ["PingryTodayApp.png"],
    tags:["Volunteer", "CS"]
  },
  {
    name:"Pingry API",
    short: "API that provides a central location for processing of data feeds and data management for Pingry App. Additionally provides these functions for other CS projects at Pingry.",
    description: "",
    links: [{text:"View code on Github", url:"https://github.com/arstrasser/pingry-api"}],
    pictures: ["PingryAPI.png"],
    tags:["Volunteer", "CS"]
  },
  {
    name:"Puzzle Box Dice",
    short: "3D printed puzzle with electronic locks driven by Arduino that only opens when solved.",
    description: "",
    links: [],
    pictures: ["DicePuzzle.jpg"],
    tags:["Volunteer", "CS"]
  },
  {
    name:"2048 Solver",
    short: "Machine learning approach to solve 2048",
    description: "2048 was a popular mobile game in 2014",
    pictures: ["2048.png"],
    links:[
      {text:"View it live", url:"https://arstrasser.github.io/2048-solver/UI/"},
      {text:"View code on Github", url:"https://arstrasser.github.io/2048-solver/UI/"}
    ],
    tags:["Volunteer", "CS"]
  },
  {
    name:"Robotics",
    short: "Captain of high school robotics for 2 years: FRC team 2577 and FTC 6069",
    description: "",
    links: [],
    pictures: ["Robotics.jpg"],
    tags:[]
  },
  {
    name:"Somerset County 4-H Fair App",
    short: "Mobile app for the Somerset County 4-H Fair",
    description: "",
    links: [],
    pictures: ["FairApp.jpg"],
    tags:["Volunteer", "CS"]
  },
  {
    name:"4-H Robotics Scoring System",
    short: "Scoring system with webcam and interface for scoring the 4-H fair robotics challenge",
    description: "",
    links: [{text:"View code on Github", url:"https://github.com/arstrasser/4hRobotics2019"}],
    pictures: ["ScoringSystem.jpg"],
    tags:["Volunteer", "CS"]
  },
  {
    name:"Puzzle Box Zero",
    short: "My first puzzle box outfitted with servos and Arduino",
    description: "",
    links: [],
    pictures: ["PuzzleBox0-3.jpg"],
    tags:["Maker"]
  },
  {
    name:"3D Renderer",
    short: "A simple ray tracer in Processing3",
    description: "",
    links: [{text:"View code on Github", url:"https://github.com/arstrasser/ray-tracer"}],
    pictures: ["RayTracer.png"],
    tags:["CS"]
  },
  {
    name:"Custom Chocolates",
    short: "3D printed flexible chocolate molds",
    description: "",
    links: [],
    pictures: ["Chocolate.jpg"],
    tags:["Maker"]
  },
  {
    name:"Home Automation",
    short: "Making my dorm room run on its own!",
    description: "",
    links: [],
    pictures: ["LightSwitch.jpg"],
    tags:["Maker"]
  },
  {
    name:"Personal Website",
    short: "The website you're looking at now!",
    description: "This website was built on react.",
    links: [{text:"View the code on Github", url:"https://github.com/arstrasser/alex-website"}],
    pictures: ["AS.png"],
    tags:["CS"]
  },
];

export { projects, tags, imagePrefix };
