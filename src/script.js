import { projects } from './projects.js';

const projectPreview = document.querySelector('.project--preview');
const overlay = document.querySelector('.overlay');

const titleCase = str =>
   str
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .pop();

window.addEventListener('hashchange', evt => {
   const hashValue = evt.newURL.split('#')[1];

   if (hashValue === 'close-project') {
      projectPreview.classList.add('u-hidden');
      overlay.classList.add('u-hidden');
      return;
   }

   const project = projects[hashValue];
   const projectName = hashValue.replaceAll('-', ' ').toUpperCase();
   console.log(projectName);

   if (project) {
      overlay.classList.remove('u-hidden');
      projectPreview.querySelector('h3').textContent = projectName;
      projectPreview.querySelector('p.parag').textContent = project.details;
      projectPreview.querySelector('.tech-used').textContent =
         project.techUsed.join(', ');
      projectPreview
         .querySelector('.project__actions')
         .querySelector('#project-url').href = project.url;
      projectPreview
         .querySelector('.project__actions')
         .querySelector('#github-url').href = project.githubUrl;

      projectPreview.classList.remove('u-hidden');
   }
});
