import * as mediaUtils from './mediaUtils.js';
import * as observers from './observers.js';
import * as projectHandlers from './project.js';

const projects = document.querySelectorAll('.project');
const projectVideos = [...projects].map(p => p.querySelector('video'));

const projectsSection = document.querySelector('section.projects');
const observe = observers.makeObservation.bind(projectsSection);

const projectsSectionObserveHandler = ([{ isIntersecting }]) => {
   if (!isIntersecting) return;
   projectVideos.forEach(vid => mediaUtils.loadSrc.call(vid));
};

const init = () => {
   observe(projectsSectionObserveHandler, { root: null, threshold: 0 });
};

init();

projects.forEach(project => {
   const handle = projectHandlers.addEventHandler.bind(project);
   handle('mouseenter', projectHandlers.handleProjectHover);
   // project.addEventListener('mouseenter', projectHandlers.handleProjectHover);
});

// prettier-ignore
export const allProjects = {
   helomi: {
      details:
         'Helomi is a single page chat app that enables users to communicate with one another through text messaging and video calling. I built this robust MERN stack project as my final year project in college. I chose this project topic because I was really curious about existing apps like Whatsapp performed their real-time functionalities. At the same time I was really fascinated by React. So, I wanted to bring something to life out of the mix of the curiosity and fascination.',

      techUsed: ['React', 'Redux', 'Sass', 'Nodejs', 'Express', 'MongoDB', 'WebRTC', 'Socket.io', 'JWT'],
      url: 'http://helomi.netlify.app/'
      // githubUrl: 'https://github.com/Chimmz/helomi'
   },

   nisclinic: {
      details: 'Nisclinic is a static website template for a clinic. I built this in the company where I did my internship.',
      techUsed: ['HTML', 'CSS', 'Sass', 'JavaScript'],
      url: 'https://nisclinic.netlify.app/',
      githubUrl: ''
   },
   dgmmc: {
      details:
         'I built this website for an organization that conducts competitions among high school students annually. This site eased student registration and announcement of results.',
      techUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Node.js', 'Express'],
      url: 'https://dgmmc.netlify.app/',
      githubUrl: ''
   },
   'dad-jokes': {
      details:
         'The Dad Jokes app is a simple app that demonstrates fetching from an external API in React. It also emphasizes the lifecycles in React. I built this when I began learning React',

      techUsed: ['React'],
      url: 'https://dgmmc.netlify.app/',
      githubUrl: ''
   }
};
