import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adrian | Full Stack Developer ',
  lang: 'en, fr, cn',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Adrian Hon',
  subtitle:'I' + `'` + 'm a full stack developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'Hi I’m Adrian and I am currently enrolled in Full-Stack Web Development at BCIT. ',
  paragraphTwo: 'My interests are front-end, back-end, and learning new frameworks and find ways to write clean code.',
  paragraphThree: 'I love to creating modern web applications.',
  //resume: // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Craigslist Redesign',
    info: 'A modern version of craigslist.',
    info2: 'JavaScript, Node.js, mySQL, CSS, Bootstrap, AWS S3, EJS',
    url: 'https://craigslist-redesign-clone.herokuapp.com/',
    repo: 'https://github.com/ahon54/Craigslist_Clone',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'NoLine',
    info: 'A mobile app built to look for nearby restaurants with indicated wait time and amount of people.',
    info2: 'JavaScript, React-native, Firebase',
    url: '',
    repo: 'https://github.com/ahon54/NoLineV2',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Photo Phactory',
    info: 'A website design for photographers to showcase their work.',
    info2: 'HTML, CSS',
    url: '',
    repo: 'https://github.com/ahon54/PhotoPhactory',
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Lettuce Reduce',
    info: '',
    info2: 'Figma',
    url: 'https://www.figma.com/proto/BiqeSNalTRhEmMqJfbhpNB/app?node-id=13%3A2&scaling=min-zoom',
    repo: 'https://www.figma.com/file/BiqeSNalTRhEmMqJfbhpNB/app?node-id=0%3A1',
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Amazon Redesign',
    info: 'Modern style of Amazon in mobile and web application',
    info2: 'Figma',
    url: '',
    repo: 'https://www.figma.com/file/cPYMJfXyRjGSquTngSQDmK/Untitled',
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'C# Project',
    info: '',
    info2: 'C#',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's build together",
  email: 'ahon2798@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrian-hon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ahon54',
    },
  ],
};
