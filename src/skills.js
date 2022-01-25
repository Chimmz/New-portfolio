import * as mediaUtils from './mediaUtils.js';
import * as observers from './observers.js';

const sectionSkills = document.getElementById('skills');
const skillImgs = sectionSkills.querySelectorAll('img');
const observe = observers.makeObservation.bind(sectionSkills);

const skillsSectionObserveHandler = ([{ isIntersecting }]) => {
   if (!isIntersecting) return;
   skillImgs.forEach(img => mediaUtils.loadSrc.call(img));
};

observe(skillsSectionObserveHandler, { root: null, threshold: 0 });
