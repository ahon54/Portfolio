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
  img: 'adh.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'Hi I’m Adrian and I am currently enrolled in Full-Stack Web Development at BCIT. ',
  paragraphTwo: 'Enthusiastic web developer with a constant desire for learning and self-improvement. My interests are front-end, back-end, and learning new frameworks, and find ways to write clean code.',
  paragraphThree: 'I love to create modern web applications. If you are interested in working together, or just feel like connecting, please view through this page.',
  resume: 'https://drive.google.com/file/d/1mq0EtQlM0_ggbVJM62aDLVKwVb_P0arw/view?usp=sharing'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'NoLine.png',
    title: 'NoLine',
    info: 'This is an app that saves time for our users by displaying restaurant capacity and estimated wait times live based on data input from the community. I am the back-end developer in charge of all the logic and did some integrations with the front-end. I collaborated with 4 Students from a program called Digital Design and Development at BCIT.',
    info2: 'React-native, JavaScript, Friebase',
    url: 'http://noline.ca/',
    repo: 'https://github.com/anthonycervi/NoLineFrontEnd',
  },
  {
    id: nanoid(),
    img: 'Craigslist-Logo.png',
    title: 'Craigslist Redesign',
    info: 'The purpose of this project is to redesign craiglist by keeping what is already good and mostly improving the UI. As for my task, I did all the back-end logic and also contributed a fair amount of front-end coding. I collaborated with 3 Students from a program called Digital Design and Development at BCIT.',
    info2: 'JavaScript, Node.js, mySQL, CSS, Bootstrap, AWS S3, EJS',
    url: 'https://craigslist-redesign-clone.herokuapp.com/',
    repo: 'https://github.com/ahon54/Craigslist_Clone',
  },
  {
    id: nanoid(),
    img: 'PHACTORY.png',
    title: 'Photo Phactory',
    info: 'A website design for photographers to showcase their work. This is a solo project to practice and enhance my front-end coding skills and creating logos',
    info2: 'HTML, CSS, Affinity Designer',
    url: 'https://drive.google.com/file/d/1GaD2W49xmKKrFsfpVnnR5RlMHQt8bfkl/view?usp=sharing',
    repo: 'https://github.com/ahon54/PhotoPhactory',
  },
  {
    id: nanoid(),
    img: 'lettuce-reduce.png',
    title: 'Lettuce Reduce',
    info: 'On average, humans waste roughly one-third of all our food. This works out to approximately 1.3 billion tonnes of food being wasted every year! This is a mock-up design made for users to reduce food waste. For this mock-up, I am in charge of creating the search bar and filter page, and result page.',
    info2: 'Figma',
    url: 'https://www.figma.com/proto/BiqeSNalTRhEmMqJfbhpNB/app?node-id=13%3A2&scaling=min-zoom',
  },
  {
    id: nanoid(),
    img: 'amazon-pic.jpg',
    title: 'Amazon Redesign',
    info: 'The modern style of Amazon in mobile and web applications. In this project, I explained what changes Amazon should make to further enhance the user experience. Moreover, I also designed a mobile app version as a solution.',
    info2: 'Figma',
    url: 'https://www.figma.com/file/cPYMJfXyRjGSquTngSQDmK/AmazonRedesign?node-id=0%3A1',
  },
  {
    id: nanoid(),
    img: 'adh1.png',
    title: 'My Logo Design',
    info: 'A logo design I made for myself used for my portfolio.',
    info2: 'Affinity Designer',
    url: 'https://drive.google.com/file/d/1P1Pvp8hnZpoQeytHQKNSlCX1r1_5bYxH/view?usp=sharing',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like my projects?',
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
