// import * as jpgImgs from "../img/*.jpg";
// import * as pngImgs from "../img/*.png";
// import * as vids from "../videos/*.mp4";

export const loadSrc = function () {
   if (this.src) return;
   console.log(this);

   let mediaName = this.dataset.src;

   if (mediaName.includes("/videos"))
      mediaName = mediaName.trim().replace("/videos/", "").replace(" ", "");
   else if (mediaName.includes("/img"))
      mediaName = mediaName.trim().replace("/img/", "").replace(" ", "");

   console.log("Media name: ", mediaName);
   this.src = window.location.origin + this.dataset.src;
};
