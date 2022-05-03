import * as mediaUtils from './mediaUtils.js';
import * as observers from './observers.js';
import * as projectHandlers from './project.js';
import { allProjects } from './projects.js';

const projectModal = document.querySelector('.project--preview');
const overlay = document.querySelector('.overlay');

const showProject = function (hashStr) {
   if (!hashStr) return;
   const projName = hashStr.split('#')[1];

   if (projName === 'close-project') {
      projectModal.classList.add('u-hidden');
      return overlay.classList.add('u-hidden');
   }

   const project = allProjects[projName];
   if (!project) return;

   project.name = projName.replaceAll('-', ' ').toUpperCase();
   overlay.classList.remove('u-hidden');
   projectHandlers.handleDisplayProject(projectModal, project);
};

showProject(window.location.hash);
window.addEventListener('hashchange', evt => showProject(evt.newURL));
