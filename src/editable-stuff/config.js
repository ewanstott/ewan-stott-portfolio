// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ewan",
  middleName: "",
  lastName: "Stott",
  message: " Software Engineer specializing in Javascript, React, Typescript, Node and MySQL. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ewanstott",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ewanstott",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/ewan-stott.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ewan-stott.png"),
  imageSize: 375,
  message:
    "I'm a Full Stack Software Engineer specializing in Javascript, React, Typescript, Node and both SQL and NoSQL databases. I'm all about building things with code to solve real-world problems. Give me a shout, let's create something together!",
  resume: require("../editable-stuff/ewan-stott-software-engineer-resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ewanstott", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: ["blimp", "simpsons-api-react", "sunni_solar_api", "todo-app-main", "slack_clone_project", "javascript-drum-kit",],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ewan-stott.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ewan-stott.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Javascript", value: 90 },
    { name: "Typescript", value: 85 },
    { name: "React.js", value: 90 },
    { name: "Redux", value: 90 },
    { name: "Next.js", value: 60 },
    { name: "GraphQL", value: 60 },
    { name: "Jest", value: 80 },
    { name: "Cypress", value: 90 },
    { name: "D3.js", value: 95 },
    { name: "HTML/CSS", value: 95 },
    { name: "SCSS", value: 95 },
    { name: "Tailwind", value: 95 },
    { name: "Material UI", value: 95 },
  ],
  softSkills: [
    { name: "Python", value: 70 },
    { name: "C", value: 50 },
    { name: "Node", value: 80 },
    { name: "Express", value: 80 },
    { name: "Django", value: 80 },
    { name: "MySQL", value: 75 },
    { name: "Postgres", value: 70 },
    { name: "MongoDB", value: 75 },
    { name: "Redis", value: 60 },
    { name: "Socket.io", value: 75 },
    { name: "Docker", value: 60 },
    { name: "Kubernetes", value: 60 },
    { name: "AWS", value: 60 },
    { name: "GCP", value: 60 },
    { name: "Netlify", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for a full-time Software Engineering role! If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ewan.stott1@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer at Expedia',// Here Add Company Name
      companylogo: require('../assets/img/expedia-logo.png'),
      date: 'January 2024 – Present',
    },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
