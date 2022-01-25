import * as mediaUtils from './mediaUtils.js';
import * as observers from './observers.js';
import * as projectHandlers from './project.js';
import { allProjects } from './projects.js';

const projectModal = document.querySelector('.project--preview');
const overlay = document.querySelector('.overlay');

const hashChangeHandler = function (evt) {
   const hashValue = evt.newURL.split('#')[1];

   if (hashValue === 'close-project') {
      projectModal.classList.add('u-hidden');
      overlay.classList.add('u-hidden');
      return;
   }

   const project = allProjects[hashValue];
   if (!project) return;

   project.name = hashValue.replaceAll('-', ' ').toUpperCase();
   overlay.classList.remove('u-hidden');
   projectHandlers.handleDisplayProject(projectModal, project);
};

window.addEventListener('hashchange', hashChangeHandler);
