const hamburgerMenu = document.querySelector(".fa-bars");
const xMenu = document.querySelector(".fa-x");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu a");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.add("active");
});

xMenu.addEventListener("click", function () {
  navMenu.classList.remove("active");
});

navItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});
