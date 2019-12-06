const options = [
  {
    name:"Student",
    header:"I am a Student",
    mainImage:"Robotics.JPG"
  },
  {
    name:"Maker",
    header:"I am a Maker",
    mainImage:"Maker.jpg",
  },
  {
    name:"Coder",
    header:"I am a Coder",
    mainImage:"Team.jpg",
    "images":["Team.jpg"]
  },
  {
    name:"Engineer",
    header:"I am an Engineer",
    mainImage:"Engineer2.jpg",
    "images":["Engineer2.jpg", "Engineer.jpg"]
  },
  {
    name:"Techie",
    header:"I am a Techie",
    mainImage:"Tech.jpg",
  },
  {
    name:"Me",
    header:"I am Alex Strasser.",
    mainImage:"Robotics2.jpg"
  }
];

const imagePrefix = "/static/images/home/"

export { options, imagePrefix };
