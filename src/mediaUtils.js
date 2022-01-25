export const loadSrc = function () {
   if (this.src) return;
   this.src = window.location.origin + '/' + this.dataset.src;
};
