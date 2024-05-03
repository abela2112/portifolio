const button = document.querySelector('.menu');
const homelink = document.querySelector(".home");
const aboutlink = document.querySelector(".about");
const contactlink = document.querySelector(".contact");
const projectlink = document.querySelector(".project");
const skillsLink = document.querySelector(".skills");

homelink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
aboutlink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
projectlink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
skillsLink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
projectlink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
contactlink.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
button.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("hidden");
  // document.querySelector('.side-bar').classList.toggle('hidden');
});
const menuButton = document.querySelector(".menu-button");
const navbarLinks = document.querySelector(".navbar-links");

document.addEventListener("DOMContentLoaded", (event) => {
  // Your code here
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    // check if closeBtn is not null
    closeBtn.addEventListener("click", () => {
      document.querySelector(".side-bar").classList.add("hidden");
    });
  }
});

// menuButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// });

// const closeBtn = document.querySelector(".close-btn")
// console.log("closebtn",closeBtn);
// closeBtn?.addEventListener('click', () => {
//     console.log('closing')
//    // document.querySelector('.side-bar').remove();
// });
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const img = entry.target;
    if (entry.isIntersecting) {
      console.log("value", entry.isIntersecting);
      img.classList.add("img-bg-animation");
      return;
    }
    img.classList.remove("img-bg-animation");
  });
});
observer.observe(document.querySelector('.img-bg'))