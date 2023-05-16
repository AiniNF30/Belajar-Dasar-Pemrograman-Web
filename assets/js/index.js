const circle = document.querySelector(".circle");

// Mengatur nilai kemampuan atau skills
const skillsValue = 75;

// Mengatur durasi animasi sesuai dengan nilai kemampuan
circle.style.animationDuration = skillsValue + "s";

const buttonClose = document.getElementById("buttonClose");
const hamburger = document.getElementById("hamburger");
const closeNavigationBar = () => {
  const navigationMobile = document.getElementById("navMobile");

  navigationMobile.style.display = "none";
};
const openNavigationBar = () => {
  const navigationMobile = document.getElementById("navMobile");

  navigationMobile.style.display = "block";
};

buttonClose.addEventListener("click", closeNavigationBar);
hamburger.addEventListener("click", openNavigationBar);
