export const makeObservation = function (...params) {
   const observer = new IntersectionObserver(...params);
   observer.observe(this);
};
