export const handleProjectHover = function () {
   const video = this.querySelector("video");

   const videoPlaying = !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
   );
   if (videoPlaying) return;

   video
      .play()
      .then(() => console.log("Video loaded and playing"))
      .catch(console.log);
};

export const handleDisplayProject = function (displayContainer, proj) {
   displayContainer.querySelector("h3").textContent = proj.name;
   displayContainer.querySelector("p.parag").textContent = proj.details;
   displayContainer.querySelector(".tech-used").textContent = proj.techUsed.join(", ");

   const linkIcon = displayContainer
      .querySelector(".project__actions")
      .querySelector("#project-url");

   linkIcon.style.visibility = !proj.url ? "hidden" : "visible";
   proj.url && (linkIcon.href = proj.url);

   const githubLinkIcon = displayContainer
      .querySelector(".project__actions")
      .querySelector("#github-url");

   console.log(linkIcon, githubLinkIcon);

   githubLinkIcon.style.visibility = !proj.githubUrl ? "hidden" : "visible";
   proj.githubUrl && (githubLinkIcon.href = proj.githubUrl);

   displayContainer.classList.remove("u-hidden");
};

export const addEventHandler = function (ev, handler) {
   this?.addEventListener(ev, handler);
};
