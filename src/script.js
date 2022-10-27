import * as projectHandlers from "./project.js";
import projectsData from "./projects-data.js";

const projectModal = document.querySelector(".project--preview");
const overlay = document.querySelector(".overlay");

const showProject = function (hashStr) {
   if (!hashStr) return;
   let str = hashStr.split("#")[1];

   if (str === "close-project") {
      projectModal.classList.add("u-hidden");
      return overlay.classList.add("u-hidden");
   }

   const proj = projectsData[str];
   if (!proj) return;

   overlay.classList.remove("u-hidden");
   projectHandlers.handleDisplayProject(projectModal, proj);
};

showProject(window.location.hash);
window.addEventListener("hashchange", (evt) => showProject(evt.newURL));
