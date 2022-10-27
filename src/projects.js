import * as mediaUtils from "./mediaUtils.js";
import * as observers from "./observers.js";
import * as projectHandlers from "./project.js";

const projects = document.querySelectorAll(".project");
const projectVideos = [...projects].map((p) => p.querySelector("video"));

const projectsSection = document.querySelector("section.projects");
const observe = observers.makeObservation.bind(projectsSection);

const projectsSectionObserveHandler = ([{ isIntersecting }]) => {
   if (!isIntersecting) return;
   projectVideos.forEach((vid) => mediaUtils.loadSrc.call(vid));
};

const init = () => {
   observe(projectsSectionObserveHandler, { root: null, threshold: 0 });
};

init();

projects.forEach((project) => {
   const handle = projectHandlers.addEventHandler.bind(project);
   handle("mouseenter", projectHandlers.handleProjectHover);
   // project.addEventListener('mouseenter', projectHandlers.handleProjectHover);
});
