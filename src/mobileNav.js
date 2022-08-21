"use strict";

const navToggler = document.querySelector(".nav-toggler");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

function handleClickNavToggler() {
   this.classList.toggle("nav-drawn-out");
   mobileNav.classList.toggle("drawn-out");
   overlay.classList.toggle("u-hidden");
}

navToggler.addEventListener("click", handleClickNavToggler);

document.body.addEventListener("click", ({ target, currentTarget }) => {
   if (target.classList.contains("nav-toggler")) return;

   const navOpenedBefore = mobileNav.classList.contains("drawn-out");
   const navClicked = target.classList.contains("mobile-nav");

   if (navOpenedBefore && !navClicked) handleClickNavToggler.call(navToggler);
});
